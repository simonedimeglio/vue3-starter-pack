<!-- 
COMPONENTE SFC (Single File Component):
è un blocco di codice riutilizzabile e autonomo 
che include HTML, CSS e JS. Tutto ciò che è necessario 
per un componente è scritto all’interno di un unico file 
con estensione .vue
____________________
RENDERING DICHIARATO:
Usando una sintassi di template che estende l’HTML, 
possiamo descrivere come l’HTML dovrebbe apparire 
in base allo stato JavaScript. Quando lo stato cambia, 
l’HTML si aggiorna automaticamente.
____________________
STATO REATTIVO (reactive & ref):
Lo stato reattivo è lo stato che, quando modificato, 
può innescare aggiornamenti automatici del DOM. 
Possiamo dichiarare lo stato reattivo usando 
l’API reactive() di Vue.

A) La funzione reactive() funziona solo con oggetti 
(inclusi array e tipi built-in come Map e Set). 

B) La funzione ref() invece può accettare qualsiasi 
tipo di valore e creare un oggetto che espone 
il valore interno sotto una proprietà .value:
____________________
UTILIZZO DELLO STATO REATTIVO NEL COMPONENTE: 
Lo stato reattivo dichiarato nel blocco <script setup> 
del componente può essere usato direttamente nel template. 
In questo modo possiamo rendere testo dinamico basato sul 
valore dell’oggetto contatore e del ref messaggio, 
usando la sintassi delle parentesi graffe (mustache):
-->


<script setup>
// Importiamo le funzioni `reactive` e `ref` da Vue
import { reactive, ref } from 'vue'

// Creiamo uno stato reattivo chiamato `contatore` usando `reactive`.
// `reactive` crea un oggetto JavaScript Proxy che tiene traccia delle modifiche
const contatore = reactive({ valore: 2 })

// Creiamo una variabile reattiva chiamata `messaggio` usando `ref`.
// `ref` può contenere qualsiasi tipo di valore e lo espone sotto una proprietà `.value`
const messaggio = ref('Ciao Mondo!')
</script>

<template>
  <!-- Utilizziamo la variabile `messaggio` nel template. Non è necessario usare `.value` qui -->
  <h1>{{ messaggio }}</h1>

  <!-- Utilizziamo la proprietà `valore` dell'oggetto reattivo `contatore` nel template -->
  <p>Il contatore è: {{ contatore.valore }}</p>
</template>