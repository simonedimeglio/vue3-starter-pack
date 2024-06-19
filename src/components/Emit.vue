<!-- 
EMIT
Ricordi le props? Comunicazione tra padre e figlio. Ma al contrario? 
Utilizziamo emit.
Si tratta di una funzione utilizzata nei componenti figlio 
per inviare eventi personalizzati ai componenti genitori. 

Questo meccanismo consente la comunicazione bidirezionale tra i componenti, 
permettendo loro di scambiare dati e informazioni importanti.

Come si usa? 

1.	Definizione degli Eventi nel Componente Figlio:

    Usando defineEmits(), si dichiarano gli eventi personalizzati 
    che il componente figlio può emettere. 
    Gli eventi devono essere dichiarati come stringhe o array di stringhe.

2.	Emissione degli Eventi nel Componente Figlio:

	All’interno del componente figlio, utilizzando la funzione emit(nomeEvento, ...args), 
    si emette l’evento personalizzato verso il componente genitore. 
    nomeEvento è il nome dell’evento dichiarato con defineEmits(), 
    e args sono gli eventuali argomenti che si desidera passare al gestore 
    dell’evento nel componente genitore.

3.	Gestione degli Eventi nel Componente Genitore:
	
    Nel componente genitore, si ascolta l’evento personalizzato 
    utilizzando la direttiva @nomeEvento="handler" nella sezione del template.
    handler è la funzione che gestisce l’evento e riceve gli eventuali argomenti 
    passati dal componente figlio.
-->

<script setup>
import { ref } from 'vue'
import EmitChild from './EmitChild.vue'

// Definiamo una variabile reattiva per memorizzare il messaggio ricevuto dal figlio
const messaggioDaFiglio = ref('Ancora nessun messaggio dal componente figlio')
</script>

<template>
    <!-- Utilizziamo il componente EmitChild e ascoltiamo l'evento 'risposta' -->
    <EmitChild @risposta="(messaggio) => messaggioDaFiglio = messaggio" />

    <!-- Visualizziamo il messaggio ricevuto dal componente figlio -->
    <p>{{ messaggioDaFiglio }}</p>
</template>