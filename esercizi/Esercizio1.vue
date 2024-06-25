<script setup>
import { ref } from 'vue'
import CardUtente from './CardUtente.vue';

const utenti = ref([
    { id: 1, nome: 'Bob', cognome: 'Mufasa', mail: 'mufasa@gmail.com', ruolo: 'USER' },
    { id: 2, nome: 'Patrik', cognome: 'Stella', mail: 'stellina@acqua.com', ruolo: 'ADMIN' },
    { id: 3, nome: 'Spongebob', cognome: 'Squarepants', mail: 'spugna@arrembaggio.com', ruolo: 'USER' },
    { id: 4, nome: 'Freddy', cognome: 'Mercurio', mail: 'termometro@musicale.com', ruolo: 'ADMIN' },
])

const filtroAttuale = ref('tutti')
</script>

<template>
    <div>
        <h1>Lista Utenti</h1>

        <div>
            <button @click="filtroAttuale = 'tutti'">Mostra tutti</button>
            <button @click="filtroAttuale = 'user'">Mostra solo gli user</button>
            <button @click="filtroAttuale = 'admin'">Mostra solo gli admin</button>
        </div>

        <div v-for="utente in utenti" :key="utente.id">
            <CardUtente v-if="filtroAttuale === 'tutti' || filtroAttuale === utente.ruolo.toLowerCase()"
                :nome="utente.nome" :cognome="utente.cognome" :mail="utente.mail" :ruolo="utente.ruolo" />
        </div>
    </div>
</template>

