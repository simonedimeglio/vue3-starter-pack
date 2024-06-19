<!-- 
CONDITIONAL RENDERING - Rendering Condizionale

Il rendering condizionale in Vue permette di mostrare 
o nascondere elementi del DOM basandosi sullo stato del componente. 
Questo è molto utile per creare interfacce utente dinamiche 
che reagiscono ai cambiamenti nello stato dell’applicazione.

	•	v-if: Utilizzato per rendere un elemento solo se la condizione specificata è vera.
	•	v-else: Utilizzato per rendere un elemento quando la condizione v-if è falsa.
	•	v-else-if: Può essere utilizzato per aggiungere ulteriori condizioni logiche.

-->

<script setup>
import { ref } from 'vue'
// Creiamo una variabile reattiva chiamata `luceAccesa` che inizialmente è `true`
const luceAccesa = ref(true)

// Definiamo una funzione chiamata `interruttore` che inverte il valore di `luceAccesa`
function interruttore() {
    luceAccesa.value = !luceAccesa.value
}
</script>

<template>
    <button @click="interruttore">Interruttore</button>
    <h2 v-if="luceAccesa">Luce accesa! 💡</h2>
    <h2 v-else>Luce spenta! 🌑</h2>
</template>