<!-- 
LIFECYCLE - Ciclo di vita

Lifecycle Hooks (hook del ciclo di vita) sono funzioni 
che vengono eseguite in specifici momenti del ciclo di vita 
di un componente. Questi momenti includono quando un componente 
viene creato, montato nel DOM, aggiornato e smontato. 

Vue offre diversi hook per permetterti di eseguire codice in 
ciascuna di queste fasi.

I più comuni lifecycle hooks:

	•	onBeforeMount: chiamato prima che il componente sia montato nel DOM.
	•	onMounted: chiamato dopo che il componente è montato nel DOM.
	•	onBeforeUpdate: chiamato prima che il DOM venga aggiornato in risposta ai cambiamenti nello stato reattivo.
	•	onUpdated: chiamato dopo che il DOM è stato aggiornato.
	•	onBeforeUnmount: chiamato prima che il componente venga smontato dal DOM.
	•	onUnmounted: chiamato dopo che il componente è stato smontato.


Nel nostro esempio, utilizziamo onMounted per eseguire 
del codice quando il componente è montato nel DOM. 
Modifichiamo il contenuto del paragrafo solo dopo 
che è stato inserito nel DOM, utilizzando una ref 
per accedere all’elemento del paragrafo.


TEMPLATE REFS
Template Refs sono un modo per ottenere riferimenti diretti 
agli elementi del DOM o ai componenti figli dal tuo template Vue. 
Puoi pensare alle refs come a puntatori che ti permettono di manipolare 
elementi del DOM o componenti dopo che sono stati renderizzati.

Nel nostro esempio, dichiariamo una ref chiamata paragrafo e 
la colleghiamo all’elemento <p> nel template. 
All’interno del lifecycle hook onMounted, modifichiamo il contenuto 
del paragrafo utilizzando paragrafo.value.


-->



<script setup>
import { ref, onMounted } from 'vue'

// Creiamo una ref per accedere al paragrafo
const paragrafo = ref(null)

// Utilizziamo il lifecycle hook onMounted per eseguire il codice quando il componente è montato
onMounted(() => {
    // Modifichiamo il contenuto del paragrafo quando il componente è montato
    paragrafo.value.textContent = 'Testo cambiato - dopo il mounted!'
})
</script>

<template>
    <!-- Utilizziamo la ref per ottenere un riferimento al paragrafo nel DOM -->
    <p ref="paragrafo">Testo originale - Prima del mounted</p>
</template>