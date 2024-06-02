/*
Simuliamo un timer di sessione:

attraverso l'utilizzo di useEffect con array di dipendenze vuoto,
facciamo in modo tale che l'effetto si esegua solo al montaggio del componente
*/

import { useState, useEffect } from "react";

function Timer() {
  const [secondi, setSecondi] = useState(0);

  useEffect(() => {
    // Funzione per aggiornare il contatore
    function lancettaAvanza() {
      setSecondi((secondiAttuali) => secondiAttuali + 1);
    }

    // Imposta un intervallo per chiamare lancettaAvanza ogni secondo
    let intervallo = setInterval(lancettaAvanza, 1000);

    // Pulisce l'intervallo quando il componente si smonta
    return () => clearInterval(intervallo);
  }, []); // L'array vuoto come dipendenza fa sì che l'effetto si esegua solo al montaggio e smontaggio

  return (
    <div>
      <h1>Timer live:</h1>
      <p>Secondi che passano: {secondi}</p>
    </div>
  );
}

export default Timer;
