<!-- 
FORM BINDINGS
In Vue riguarda come gestire e sincronizzare i dati 
tra gli elementi di input di un form e lo stato di un componente Vue. 

V-BIND & V-ON -> INSIEME! 
In Vue, è possibile creare collegamenti bidirezionali 
sugli elementi di input del form utilizzando le direttive v-bind e v-on insieme. 
Questo permette di mantenere sincronizzati i dati dello stato 
del componente con l’input dell’utente.

Esiste quindi una direttiva specifica chiamata v-model. 
Questa direttiva è uno "zucchero sintattico" che combina v-bind:value e v-on:input 
in un’unica istruzione, rendendo il codice più pulito e leggibile.
-->


<!-- 
DA QUESTO
<script setup>
import { ref } from 'vue'

const testo = ref('')

function ascoltaInput(evento) {
  testo.value = evento.target.value
}
</script>

<template>
  <input :value="testo" @input="ascoltaInput" placeholder="Scrivi qualcosa">
  <p>{{ testo }}</p>
</template> 
-->

<!-- A QUESTO! -->
<script setup>
import { ref } from 'vue'

const testo = ref('')
</script>

<template>
    <input v-model="testo" placeholder="Scrivi qualcosa">
    <p>{{ testo }}</p>
</template>