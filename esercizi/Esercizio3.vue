<script setup>
import { ref } from 'vue';

const automobili = ref([
    { id: 1, marca: 'Fiat', modello: 'Panda', anno: 2001, alimentazione: 'Benzina', disponbile: true },
    { id: 2, marca: 'Fiat', modello: 'Punto', anno: 2021, alimentazione: 'Metano', disponbile: false },
    { id: 3, marca: 'Tesla', modello: 'Panda', anno: 2001, alimentazione: 'Elettrica', disponbile: true },
    { id: 4, marca: 'Fiat', modello: 'Arancio', anno: 2001, alimentazione: 'Benzina', disponbile: true },
    { id: 5, marca: 'Bo', modello: 'Ciao', anno: 2001, alimentazione: 'Diesel', disponbile: false },
    { id: 6, marca: 'Fiat', modello: 'Panda', anno: 2001, alimentazione: 'Benzina', disponbile: true },
    { id: 7, marca: 'BMW', modello: 'Qualcosa', anno: 2001, alimentazione: 'Elettrica', disponbile: false },
    { id: 8, marca: 'Ford', modello: 'Focus', anno: 2001, alimentazione: 'Benzina', disponbile: true },
])


const filtroAttuale = ref('tutte');

function toggla(auto){
    auto.disponbile = !auto.disponbile
}



</script>

<template>
    <div>
        <button @click="filtroAttuale = 'tutte'">Tutte le auto</button>
        <button @click="filtroAttuale = 'Benzina'">Benzina</button>
        <button @click="filtroAttuale = 'Diesel'">Diesel</button>
        <button @click="filtroAttuale = 'Metano'">Metano</button>
        <button @click="filtroAttuale = 'Elettrica'">Elettrica</button>
    </div>


    <div v-for="auto in automobili" :key="auto.id">
        <div v-if="filtroAttuale === 'tutte' || filtroAttuale === auto.alimentazione" :class="['bg-gray', auto.disponbile ? 'verde' : 'rosso']"  >
            <h2>{{ auto.marca }} - {{ auto.modello }} - {{ auto.anno }}</h2>
            <h3>ALIMENTAZIONE: {{ auto.alimentazione }}</h3>
            <h4>DISPONBILE: {{ auto.disponbile }}</h4>
            <button @click="toggla(auto)">Cambia disponibilità</button>
            <hr>
        </div>
    </div>

</template>



<style>
.rosso {
    color: red;
}

.bg-gray {
    background-color: lightgray;
}

.verde {
    color: green;
}
</style>