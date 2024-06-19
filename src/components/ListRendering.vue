<!-- 
LIST RENDERING
Il list rendering in Vue consente di iterare 
su una collezione di dati e renderizzare 
elementi ripetutamente nel DOM. 

Questo è molto utile quando si ha una lista di elementi, 
come una lista di To-Do, e si vuole mostrarli dinamicamente. 

	1.	v-for:
	    Direttiva per iterare su una lista di dati e renderizzare 
        un elemento per ogni item della lista.

	2.	key:
	    Attributo richiesto in v-for per tracciare 
        ogni elemento del DOM in modo efficiente.

-->

<script setup>
import { ref } from 'vue'

// Creiamo una variabile che tenga conto di un id iniziale pari a 0
let id = 0

// Creiamo una variabile reattiva per memorizzare il testo della nuova To-Do
const nuovaToDo = ref('')

// Creiamo una lista reattiva di To-Do predefinite, ciascuna con un id unico e un testo
const listaToDos = ref([
    { id: id++, testo: 'Fare la spesa 🛒' },
    { id: id++, testo: 'Portare a spasso il cane 🐶' },
    { id: id++, testo: 'Lavare la macchina 🚗' }
])

// Funzione per aggiungere una nuova To-Do alla lista
function aggiungiToDo() {
    // Aggiungiamo la nuova To-Do alla lista con un id unico e il testo attuale
    listaToDos.value.push({ id: id++, testo: nuovaToDo.value })
    // Resettiamo il valore dell'input per una nuova To-Do
    nuovaToDo.value = ''
}

// Funzione per cancellare una To-Do dalla lista
function cancellaToDo(todo) {
    // Filtriamo fuori la To-Do specificata dalla lista
    listaToDos.value = listaToDos.value.filter((singolaToDo) => singolaToDo !== todo)
}
</script>

<template>
    <!-- Form per aggiungere una nuova To-Do -->
    <form @submit.prevent="aggiungiToDo">
        <!-- Input legato alla variabile reattiva `nuovaToDo` -->
        <input v-model="nuovaToDo" placeholder="Aggiungi ToDo" required>
        <!-- Pulsante per inviare il form e aggiungere la To-Do -->
        <button>Aggiungi</button>
    </form>

    <!-- Lista delle To-Do -->
    <ul>
        <!-- Cicliamo su ogni To-Do nella lista per creare un elemento della lista -->
        <li v-for="todo in listaToDos" :key="todo.id">
            <!-- Mostriamo il testo della To-Do -->
            {{ todo.testo }}
            <!-- Pulsante per cancellare la To-Do corrente -->
            <button @click="cancellaToDo(todo)">Elimina</button>
        </li>
    </ul>
</template>