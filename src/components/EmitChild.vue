<script setup>
import { defineEmits } from 'vue'

// Definiamo gli eventi che il componente figlio può emettere
const emit = defineEmits(['risposta'])

// Emettiamo l'evento 'risposta' con un messaggio personalizzato
emit('risposta', 'Messaggio dal figlio!')
</script>

<template>
    <h2>Componente figlio</h2>
</template>