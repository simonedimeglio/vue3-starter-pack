<!-- 
ATTRIBUTE BINDING - Attributi dinamici

In Vue, le parentesi graffe (mustache) sono usate solo 
per l’interpolazione di testo. Per collegare un attributo 
a un valore dinamico, utilizziamo la direttiva "v-bind".

Una direttiva è un attributo speciale che inizia con il prefisso v-. 
Le direttive fanno parte della sintassi del template di Vue. 
I valori delle direttive sono espressioni JavaScript 
che hanno accesso allo stato del componente. 
(Esempio: v-bind:class oppure riassumibile in :class)
La parte dopo i due punti (esempio :class) è l’“argomento” della direttiva. 
-->

<script setup>
import { ref } from 'vue'

const classeTitolo = ref('titolo')
</script>

<template>
    <h1 v-bind:class="classeTitolo">Colorami di verde</h1>
</template>

<style>
.titolo {
    color: greenyellow;
}
</style>