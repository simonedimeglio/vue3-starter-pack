<script setup>
import Components from './components/Components.vue';
import Props from './components/Props.vue';
import RenderingDichiarato from './components/RenderingDichiarato.vue'
import AttributeBinding from './components/AttributeBinding.vue';
import EventListeners from './components/EventListeners.vue';
import FormBindings from './components/FormBindings.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import ListRendering from './components/ListRendering.vue';
import Computed from './components/Computed.vue';
import Lifecycle from './components/Lifecycle.vue';
import Watchers from './components/Watchers.vue';
import Emit from './components/Emit.vue';
import Slot from './components/Slot.vue';
</script>

<template>
  <!-- In ordine corretto -->
  <Components />
  <Props />
  <RenderingDichiarato />
  <AttributeBinding />
  <EventListeners />
  <FormBindings />
  <ConditionalRendering />
  <ListRendering />
  <Computed />
  <Lifecycle />
  <Watchers /> 
  <Emit />
  <Slot />

</template>


<!-- <style scoped></style> -->
