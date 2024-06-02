# useEffect - Approfondimento

Questo progetto contiene diversi componenti React che dimostrano l’uso dell’hook useEffect in diversi scenari.

L’hook useEffect è fondamentale per gestire effetti collaterali nei componenti funzionali di React.

### Recap: ciclo di vita del componente React

Un componente React attraversa diverse fasi di **vita** dalla sua creazione al suo smontaggio.
Le fasi sono:

1. **Montaggio** - *in inglese Mounting*
2. **Aggiornamento** - *in inglese Updating*
3. **Smontaggio** - *in inglese Unmounting*

**-> Vedi il file components/cicloDiVita.jsx**

Prima dell'avvento dei componenti basati su funzioni, React offriva una serie di metodi dedicati a gestire queste fasi.
Dall'arrivo degli hook, nei componenti basati su funzioni, queste fasi sono rilegate ad useEffect (in particolare, la fase del montaggio è gestita tramite useEffect senza dipendenze specificate - ovvero con array vuoto. La fase di aggiornamento, viene invece gestita in useEffect con le dipendeze specificate nell'array).

## Il codice di questa repository

> NB: per comprendere al meglio i concetti spiegati in questa lezione,
> possiamo disabilitare `React.StrictMode`. Questo strumento di React, di
> base, ci aiuta (*SOLO IN SVILUPPO, NON IN PRODUZIONE*) a scovare alcuni
> problemi nel codice, attivando degli avvisi e dei controlli ad hoc.
> Tra i controlli che effettua, fa un raddoppiamento di alcune fasi del
> ciclo di vita (`mounting` e `updating`) per aiutarci a
> risolvere eventuali effetti collaterali indesiderati. (Fa anche moltre
> altre cose, tra cui fornire avvisi di metodi o API deprecate,
> controlli sugli hook ed altro ancora.)

1. **components/fetch/Fetch.jsx**
Componente che utilizza `useEffect` per effettuare una richiesta API quando il componente viene montato.

2. **components/polling/Polling.jsx**
Questo componente simula una richiesta API periodica ogni 5 secondi utilizzando `useEffect` con `setInterval`.

3. **components/timer/Timer.jsx**
Usiamo `useEffect` per implementare un semplice timer che conta i secondi trascorsi dal montaggio del componente.

4. **components/filter/Filter.jsx**
Componente che utilizza `useEffect` con dipendenza specificata per effettuare un filtro sui nomi ogni volta che l'input di ricerca viene popolato

5. **components/nessunaDipendenza/NessunaDipendenza.jsx**
Esempio - *puramente didattico* - del funzionamento di `useEffect` senza dipendenze.

## Recap: l'array di dipendenze in useEffect()

- **Array vuoto**: useEffect con un array vuoto ([]) come secondo argomento viene eseguito una sola volta al montaggio.
- **Dipendenze specifiche**: Includere variabili nel secondo argomento per eseguire l’effetto ogni volta che una di queste variabili cambia.
- **Senza array di dipendenze**: L’effetto viene eseguito dopo ogni render, il che può causare problemi di performance se non gestito correttamente.
