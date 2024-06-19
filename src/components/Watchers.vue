<!-- 
WATCHERS 
Un watcher è una funzione che “osserva” i cambiamenti di una variabile reattiva 
o di un’espressione e permette di eseguire del codice in risposta a questi cambiamenti. 
Questo è utile quando hai bisogno di eseguire operazioni che dipendono dallo stato reattivo del componente, 
come richieste di rete o aggiornamenti complessi del DOM.

Quando devo usare questi watchers? 
•	Per "reagire" ai cambiamenti di uno specifico dato reattivo.
•	Per eseguire operazioni asincrone (come richieste HTTP) in risposta ai cambiamenti di stato.
•	Per eseguire calcoli o aggiornamenti che non possono essere facilmente gestiti da computed properties.
-->



<script setup>
import { ref, watch } from 'vue'

// Creiamo una ref per l'ID della ToDo
const idToDo = ref(1)

// Creiamo una ref per contenere i dati della ToDo
const datiToDo = ref(null)

// Funzione asincrona per recuperare i dati dal servizio JSONPlaceholder
async function fetchDaJsonPlaceholder() {
    // Impostiamo datiToDo a null prima di effettuare la richiesta
    datiToDo.value = null
    // Effettuiamo la richiesta fetch per ottenere i dati della ToDo con l'ID corrente
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${idToDo.value}`)
    // Assegniamo la risposta JSON a datiToDo
    datiToDo.value = await response.json()
}

// Chiamiamo fetchDaJsonPlaceholder una prima volta per inizializzare i dati
fetchDaJsonPlaceholder()

// Utilizziamo il watch per osservare i cambiamenti di idToDo e richiamare fetchDaJsonPlaceholder ogni volta che cambia
watch(idToDo, fetchDaJsonPlaceholder)
</script>

<template>
    <!-- Visualizziamo l'ID corrente della ToDo -->
    <p>ID della ToDo: {{ idToDo }}</p>
    <!-- Bottone per incrementare l'ID della ToDo, disabilitato se i dati sono in fase di caricamento -->
    <button @click="idToDo++" :disabled="!datiToDo">Chiamata per la prossima ToDo</button>
    <!-- Mostriamo un messaggio di caricamento se datiToDo è null -->
    <p v-if="!datiToDo">Caricamento...</p>
    <!-- Mostriamo i dati della ToDo in formato JSON quando sono disponibili -->
    <pre v-else>{{ datiToDo }}</pre>
</template>