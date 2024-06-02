import { useState, useEffect } from "react";

function Filter() {
  const [nomeDaCercare, setNomeDaCercare] = useState("");
  const [nomiFiltrati, setNomiFiltrati] = useState([]);

  const nomi = ["Simone", "Spongebob", "Patrik", "Squiddy", "LoL", "Banana"];

  useEffect(() => {
    let risultati = nomi.filter((nome) =>
      nome.toLowerCase().includes(nomeDaCercare.toLowerCase()),
    );

    setNomiFiltrati(risultati);
  }, [nomeDaCercare]); // Esegui l'effetto solo quando `nomeDaCercare` cambia

  return (
    <div>
      <h2>Filtra per nome:</h2>
      <input
        type="text"
        value={nomeDaCercare}
        onChange={(e) => setNomeDaCercare(e.target.value)}
        placeholder="Inserisci un nome da cercare"
      />
      <ul>
        {nomiFiltrati.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
