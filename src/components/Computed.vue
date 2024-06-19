<!-- 
COMPUTED PROPERTY
Una proprietà computata (computed property) è una funzione
che calcola un valore basato su altre variabili reattive. 

Il suo valore viene memorizzato nella cache fino a quando 
le variabili su cui si basa non cambiano. 

Questo è utile per evitare ricalcoli inutili e per mantenere 
il codice pulito e leggibile. 

----------------------
Esempio SENZA computed
----------------------

<script setup>
import { ref } from 'vue'

const tasks = ref([
  { testo: 'Fare la spesa', fatto: true },
  { testo: 'Portare a spasso il cane', fatto: false },
  { testo: 'Lavare la macchina', fatto: false }
])

function filtraNonCompletate() {
  return tasks.value.filter(task => !task.fatto)
}

</script>

<template>
  <ul>
    <li v-for="task in filtraNonCompletate()" :key="task.testo">
      {{ task.testo }}
    </li>
  </ul>
</template>


In questo esempio, ogni volta che la lista viene aggiornata, 
la funzione getIncompleteTasks viene chiamata, 
il che potrebbe essere inefficiente.
----------------------

----------------------
Esempio CON computed
----------------------

<script setup>
import { ref, computed } from 'vue'

const tasks = ref([
  { testo: 'Fare la spesa', fatto: true },
  { testo: 'Portare a spasso il cane', fatto: false },
  { testo: 'Lavare la macchina', fatto: false }
])

const taskIncomplete = computed(() => {
  return tasks.value.filter(task => !task.fatto)
})
</script>

<template>
  <ul>
    <li v-for="task in taskIncomplete" :key="task.testo">
      {{ task.testo }}
    </li>
  </ul>
</template>


DIFFERENZE ? 
•	PRIMO ESEMPIO (SENZA COMPUTED): Ogni volta che il template viene aggiornato, la funzione getIncompleteTasks viene chiamata, ricalcolando le task incomplete.
•	SECONDO ESEMPIO (CON COMPUTED): taskIncomplete viene ricalcolato solo quando la lista delle task (tasks) cambia. Se non ci sono cambiamenti, Vue utilizza il valore memorizzato nella cache.
-->


<script setup>
import { ref, computed } from 'vue'

// Creiamo una variabile che tenga conto di un id iniziale pari a 0
let id = 0

// Creiamo variabili reattive per la nuova task e per nascondere le task completate
const nuovaTask = ref('')
const nascondiCompletata = ref(false)

// Creiamo una lista reattiva di task, ciascuna con un id unico, testo e stato di completamento
const listaTask = ref([
    { id: id++, testo: 'Fare la spesa 🛒', fatto: true },
    { id: id++, testo: 'Portare a spasso il cane 🐶', fatto: true },
    { id: id++, testo: 'Lavare la macchina 🚗', fatto: false }
])

// Creiamo una proprietà computata per filtrare la lista delle task in base allo stato di `nascondiCompletata`
const filtraListaTask = computed(() => {
    return nascondiCompletata.value
        ? listaTask.value.filter((t) => !t.fatto)
        : listaTask.value
})

// Funzione per aggiungere una nuova task alla lista
function aggiungiTask() {
    listaTask.value.push({ id: id++, testo: nuovaTask.value, fatto: false })
    nuovaTask.value = ''
}

// Funzione per rimuovere una task dalla lista
function rimuoviTask(task) {
    listaTask.value = listaTask.value.filter((singolaTask) => singolaTask !== task)
}
</script>

<template>
    <!-- Form per aggiungere una nuova task -->
    <form @submit.prevent="aggiungiTask">
        <!-- Input legato alla variabile reattiva `nuovaTask` -->
        <input v-model="nuovaTask" placeholder="Aggiungi Task" required>
        <!-- Pulsante per inviare il form e aggiungere la task -->
        <button>Aggiungi una Task</button>
    </form>

    <!-- Lista delle task -->
    <ul>
        <!-- Cicliamo su ogni task nella lista filtrata per creare un elemento della lista -->
        <li v-for="task in filtraListaTask" :key="task.id">
            <!-- Checkbox per marcare la task come fatta/non fatta -->
            <input type="checkbox" v-model="task.fatto">
            <!-- Mostriamo il testo della task, con stile diverso se è completata -->
            <span :class="{ fatto: task.fatto }">{{ task.testo }}</span>
            <!-- Pulsante per eliminare la task corrente -->
            <button @click="rimuoviTask(task)">Elimina</button>
        </li>
    </ul>

    <!-- Pulsante per alternare la visualizzazione delle task completate -->
    <button @click="nascondiCompletata = !nascondiCompletata">
        <!-- Testo del pulsante cambia in base allo stato di `nascondiCompletata` -->
        {{ nascondiCompletata ? 'Mostra Tutte 👀' : 'Nascondi Completate 🙈' }}
    </button>
</template>

<style>
/* Stile per le task completate: testo barrato */
.fatto {
    text-decoration: line-through;
}
</style>