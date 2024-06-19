<!-- 
SLOTS 
Gli slots sono un meccanismo per passare contenuto HTML 
o testuale da un componente genitore a un componente figlio in Vue. 
Consentono di creare componenti più flessibili e componibili, 
dove il contenuto può essere personalizzato o esteso da chi utilizza il componente.

In questo esempio passiamo il messaggio "Messaggio: {{ messaggio }}" 
al componente figlio SlotChild attraverso lo slot. 

Se il componente figlio non specifica alcun contenuto per lo slot, 
il testo di fallback “Contenuto di Fallback” sarà mostrato.

Il componente figlio SlotChild definisce uno slot 
con il testo di fallback predefinito. 

Questo testo viene visualizzato solo se il 
componente genitore non fornisce altro contenuto per lo slot.
-->

<script setup>
import { ref } from 'vue'
import SlotChild from './SlotChild.vue'

// Definiamo una variabile reattiva 'messaggio' nel componente genitore
const messaggio = ref('Ciao dal genitore')
</script>

<template>
    <!-- Utilizziamo il componente SlotChild e passiamo del contenuto attraverso lo slot -->
    <SlotChild>Messaggio: {{ messaggio }}</SlotChild>
</template>