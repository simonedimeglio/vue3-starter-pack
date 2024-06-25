<script setup>
import { ref } from 'vue'

const libri = ref([
    { id: 1, titolo: 'Libro 1', autore: 'Autore 1', genere: 'Romanzo', disponibilità: true },
    { id: 2, titolo: 'Libro 2', autore: 'Autore 2', genere: 'Saggio', disponibilità: false },
    { id: 3, titolo: 'Libro 3', autore: 'Autore 3', genere: 'Biografia', disponibilità: true },
    { id: 4, titolo: 'Libro 4', autore: 'Autore 4', genere: 'Romanzo', disponibilità: true },
    { id: 5, titolo: 'Libro 5', autore: 'Autore 5', genere: 'Saggio', disponibilità: false },
    { id: 6, titolo: 'Libro 6', autore: 'Autore 6', genere: 'Biografia', disponibilità: false },
])

const filtroAttuale = ref('tutti')

function cambiaDisponibilità(libro) {
    libro.disponibilità = !libro.disponibilità
}
</script>

<template>
    <div>
        <button @click="filtroAttuale='tutti'">Tutti</button>
        <button @click="filtroAttuale='Romanzo'">Romanzi</button>
        <button @click="filtroAttuale='Saggio'">Saggi</button>
        <button @click="filtroAttuale='Biografia'">Biografie</button>
        <button @click="filtroAttuale='disponibili'">Solo Disponibili</button>

        <div v-for="libro in libri" :key="libro.id">
            <div
                v-if="filtroAttuale === 'tutti' || filtroAttuale === libro.genere || (filtroAttuale === 'disponibili' && libro.disponibilità)">
                <h2>{{ libro.titolo }}</h2>
                <p>Autore: {{ libro.autore }}</p>
                <p>Genere: {{ libro.genere }}</p>
                <p>Disponibilità: {{ libro.disponibilità ? 'Disponibile' : 'Non disponibile' }}</p>
                <button @click="cambiaDisponibilità(libro)">Cambia disponibilità</button>
            </div>
        </div>
    </div>
</template>