<!-- 
EVENT LISTENERS 
Possiamo ascoltare gli eventi DOM usando la direttiva v-on:
(Esempio: <button v-on:click="aumenta">{{ countatore }}</button>)
Poiché anche v-on è usato molto frequentemente, 
ha una sintassi abbreviata tramite la @ ed il tipo di evento.

Esistono molti tipi di eventi da poter gestire, proprio come in JavaScript
(Vedi alla fine di questo componente!)
-->

<script setup>
// Importiamo la funzione `ref` da Vue per creare una variabile reattiva
import { ref } from 'vue'

// Creiamo una variabile reattiva chiamata `contatore` con valore iniziale 0
const contatore = ref(0)

// Definiamo una funzione chiamata `aumenta` che incrementa il valore di `contatore`
function aumenta() {
    contatore.value++
}
</script>

<template>
    <!-- Utilizziamo la sintassi abbreviata `v-on` (@click) per collegare l'evento click alla funzione `aumenta` -->
    <button @click="aumenta">Il contatore è pari a: {{ contatore }}</button>
</template>


<!-- 
Ecco alcuni degli eventi più comuni che è possibile gestire con Vue:

	1.	Eventi di Mouse:
	•	click: Quando viene cliccato un elemento.
	•	dblclick: Quando viene effettuato un doppio clic su un elemento.
	•	mouseover: Quando il puntatore del mouse entra nell’area di un elemento.
	•	mouseout: Quando il puntatore del mouse esce dall’area di un elemento.
	•	mousedown, mouseup: Eventi associati al clic del mouse.
	2.	Eventi di Tastiera:
	•	keydown: Quando una tastiera viene premuta mentre l’elemento ha il focus.
	•	keyup: Quando una tastiera viene rilasciata mentre l’elemento ha il focus.
	•	keypress: Quando una tastiera viene premuta e rilasciata mentre l’elemento ha il focus.
	3.	Eventi di Input:
	•	input: Quando il valore di un elemento di input, textarea o select cambia (usato spesso con v-model).
	•	change: Quando il valore di un elemento di input, textarea o select cambia e perde il focus.
	4.	Eventi di Form:
	•	submit: Quando un form viene inviato.
	•	reset: Quando un form viene resettato.
	5.	Eventi di Focus:
	•	focus: Quando un elemento ottiene il focus.
	•	blur: Quando un elemento perde il focus.
	6.	Eventi di Scroll:
	•	scroll: Quando viene scrollata la finestra o un elemento con overflow.
	7.	Eventi di Caricamento della Pagina:
	•	load: Quando la pagina (o una risorsa come un’immagine) è completamente caricata.
	•	DOMContentLoaded: Quando il DOM della pagina è stato completamente caricato.
	8.	Eventi di Drag and Drop:
	•	dragstart, dragend: Eventi associati all’inizio e alla fine di un’operazione di trascinamento.
	•	dragenter, dragleave: Eventi quando un elemento viene trascinato sopra o fuori di un altro elemento.

-->