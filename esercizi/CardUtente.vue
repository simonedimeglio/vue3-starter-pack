<script setup>
defineProps({
    nome: String,
    cognome: String,
    mail: String,
    ruolo: String
})
</script>

<template>
    <div>
        <h2>{{ nome }} {{ cognome }}</h2>
        <p>Email: {{ mail }}</p>
        <p>Ruolo: {{ ruolo }}</p>
    </div>
</template>
