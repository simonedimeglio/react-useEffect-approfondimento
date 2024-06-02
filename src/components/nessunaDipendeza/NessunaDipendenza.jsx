/*
Ecco un esempio di utilizzo di useEffect
senza dichiarare l’array di dipendenze,
che è utile per comprendere come useEffect
viene eseguito dopo ogni render del componente.

NB - ATTENZIONE! - Dobbiamo stare veramente attenti questo approccio

Utilizzare useEffect senza un array di dipendenze
può causare problemi di performance perché
l’effetto viene eseguito dopo ogni render.
(sopratutto se l’effetto esegue operazioni costose).
*/

import { useState, useEffect } from "react";

function NessunaDipendenza() {
  const [contatore, setContatore] = useState(0);

  // Dimostriamo che l'effetto viene scatenato ogni volta
  // che il componente viene renderizzato
  useEffect(() => {
    console.log(`Componente renderizzato - ${contatore}`);
  }); // Nessun array di dipendenze!

  // NB: è come scrivere un console.log senza useEffect!
  // console.log(`Componente renderizzato - ${contatore}`);

  return (
    <div>
      <h2>Senza Dipendenze</h2>
      <h3>Current contatore: {contatore}</h3>
      <button onClick={() => setContatore(contatore + 1)}>
        Clicca per aumentare il contatore e vedere il console.log!
      </button>
    </div>
  );
}

export default NessunaDipendenza;
