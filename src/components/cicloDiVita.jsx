import { useState, useEffect } from "react";

function CicloDiVita() {
  const [contatore, setContatore] = useState(0);

  useEffect(() => {
    console.log("Il componente è stato montato");

    // Azione da fare allo smontaggio ("Pulizia dell'effetto")
    return () => {
      console.log("Il componente è stato smontato");
    };
  }, []);

  useEffect(() => {
    console.log("Il componente è stato aggiornato");
  }, [contatore]);

  // Il seguente log equivale ad un useEffect senza array di dipendenze
  // console.log("Render del componente");

  return (
    <div>
      <h2>Componente: CicloDiVita.jsx</h2>
      <p>Contatore: {contatore}</p>
      <button onClick={() => setContatore(contatore + 1)}>
        Aumenta di uno il contatore
      </button>
    </div>
  );
}

export default CicloDiVita;
