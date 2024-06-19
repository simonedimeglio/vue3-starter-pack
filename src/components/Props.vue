<!-- 
PROPS - Properties
Le props (abbreviazione di properties) sono un modo per passare dati 
dai componenti genitori ai componenti figli in Vue. 

Questo meccanismo permette ai componenti di essere più modulari e riutilizzabili. 

Come si fa? 
	1.	Definire le Props nel Componente Figlio:
	    Usando defineProps(), si dichiarano le props che il componente figlio 
        si aspetta di ricevere dal componente genitore.

	2.	Passare le Props dal Componente Genitore:
	•	Nel componente genitore, si passa il valore delle props al componente 
        figlio utilizzando la sintassi di binding :
-->

<script setup>
import { ref } from 'vue'
import PropsChild from './PropsChild.vue'

// Definiamo una variabile reattiva 'saluto' con il messaggio da passare al componente figlio
const saluto = ref('Ciao Dal Componente Genitore')

// Definiamo una variabile reattiva 'nome' con il nome da passare al componente figlio
const nome = ref('Simon Lebon')
</script>

<template>
  <!-- Utilizziamo il componente PropsChild e passiamo la variabile 'saluto' come prop 'messaggio' -->
  <PropsChild :messaggio="saluto" />

  <!-- Utilizziamo il componente PropsChild e passiamo la variabile 'nome' come prop 'messaggio' -->
  <PropsChild :messaggio="nome" />
</template>