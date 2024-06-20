# Routing Vue3 - Composition API

Il routing è il processo che permette di navigare tra diverse pagine o viste all’interno della tua applicazione, mantenendo l’interfaccia utente sincronizzata con l’URL.

## Step 1: Installa Vue Router

Prima di tutto, devi installare Vue Router, il pacchetto ufficiale per la gestione del routing in Vue.js.

```bash
npm install vue-router@next
```

## Step 2: Crea il router

Crea un file "router.js" dove configurerai le tue rotte.

```js
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

## Step 3: Configura il router nell’applicazione Vue

Integra il router nella tua applicazione Vue. Apri il file principale (solitamente main.js) e aggiungi il router.

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
```

## Step 4: Usa il router all'interno dei componenti

Ora puoi usare i componenti di Vue Router come `<router-link>` per la navigazione e `<router-view>` per mostrare le viste.

```vue
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
```
