/*
Utilizzo l’hook useEffect per implementare
una funzionalità di aggiornamento periodico dei dati.

In questo esempio, il componente aggiorna i dati ogni tot,
simulando una sorta di "polling".

Il polling è una tecnica utilizzata nelle app
per controllare periodicamente una risorsa o un servizio
per verificare la presenza di aggiornamenti o modifiche.

Questo processo consiste nel fare richieste ripetute
a intervalli regolari per ottenere nuovi dati o informazioni.
*/

import { useState, useEffect } from "react";

function Polling() {
  const [dati, setDati] = useState(null); // Inizializzo a null i dati
  const [contatore, setContatore] = useState(0); // Inizializzo a zero il contatore

  useEffect(() => {
    // Funzione per simulare il fetch dei dati
    function fetch() {
      // Simuliamo l'aggiornamento dei dati
      // con un nuovo valore del contatore
      setDati(`Data aggiornati: ${contatore}`);
    }

    fetch(); // Lanciamo subito all'avvio

    // Impostiamo un intervallo per chiamare la "fetch" ogni 5 secondi
    const intervallo = setInterval(() => {
      setContatore((contatoreAttuale) => contatoreAttuale + 1);
      fetch();
    }, 5000);

    // Puliamo l'intervallo quando il componente si smonta
    return () => clearInterval(intervallo);
  }, [contatore]); // Aggiungiamo `contatore` alle dipendenze per aggiornare i dati quando cambia

  return (
    <div>
      <h2>Fake Polling</h2>
      {dati ? <p>{dati}</p> : <p>Caricamento</p>}
    </div>
  );
}

export default Polling;
