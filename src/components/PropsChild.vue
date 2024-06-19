<script setup>
// Definiamo le props che il componente figlio si aspetta di ricevere
const props = defineProps({
    messaggio: String // Definiamo 'messaggio' come una prop di tipo String
})
</script>

<template>
    <!-- Visualizziamo il valore della prop 'messaggio', con un valore di fallback -->
    <h2>{{ messaggio || 'Nessuna props passata' }}</h2>
</template>