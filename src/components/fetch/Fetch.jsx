/*
Classico esempio di useEffect:

Effettuiamo una chiamata a JSONPlaceholder.

Tramite l'utilizzo di useEffect dichiarato con array
di dipendenze vuote, possiamo permetterci di effettuare
una GET solo inizialmente, al caricamento del componente.
*/

import { useState, useEffect } from "react";

function Fetch() {
  const [listaPost, setListaPost] = useState([]);
  const [caricamento, setCaricamento] = useState(true);

  // Useremo useEffect con dipendenze vuote per eseguire
  // l'effetto solo una volta al montaggio del componente
  useEffect(() => {
    // Fetch ai post
    async function getPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setListaPost(data);
        setCaricamento(false);
      } catch (error) {
        console.error("Errore - impossibile caricare i post:", error);
        setCaricamento(false);
      }
    }

    getPosts();
  }, []);

  return (
    <div>
      <h1>Elenco dei post</h1>
      {caricamento ? (
        <p>Sto caricando i post</p>
      ) : (
        <ul>
          {listaPost.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fetch;
