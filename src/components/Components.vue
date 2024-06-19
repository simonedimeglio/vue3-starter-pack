<!-- 
COMPONENTS
I componenti Vue sono tipicamente creati come file ".vue" 
Questi file contengono il template HTML, lo script JavaScript e gli stili CSS necessari per il componente.

Un file componente Vue ha tre sezioni principali: 
1) <template>
2) <script>
3) <style>


1) <template>
•	Descrizione: Questa sezione contiene il markup HTML che descrive la struttura visiva del componente.
•	Quando è obbligatorio: Se il tuo componente deve renderizzare qualche elemento HTML.
•	Quando può essere omesso: Se il componente non ha bisogno di un’interfaccia utente, 
    ad esempio se stai creando un componente puramente logico che non renderizza nulla. 
    In pratica, è molto raro che un componente Vue non abbia una sezione <template>.

2) <script>
	•	Descrizione: Questa sezione contiene la logica del componente, inclusi dati reattivi, metodi, 
        e hook del ciclo di vita.
	•	Quando è obbligatorio: Se il componente ha bisogno di gestire stati, metodi, o qualsiasi logica.
	•	Quando può essere omesso: Se il componente è puramente decorativo e non necessita di alcuna logica. 
        Ad esempio, un componente che visualizza solo un pezzo di HTML statico.

3) <style>
	•	Descrizione: Questa sezione contiene gli stili CSS che si applicano al componente.
	•	Quando è obbligatorio: Se il componente ha bisogno di stili CSS specifici.
	•	Quando può essere omesso: Se il componente non necessita di stili specifici o 
        se gli stili sono già gestiti globalmente.

        
Una volta creato il tuo componente, 
devi importarlo e registrarlo nel componente genitore o nell’app principale.
-->

<script setup>
import ComponenteFiglio from './ComponenteFiglio.vue'
</script>

<template>
    <ComponenteFiglio />
</template>