// FILE: main.js
import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const myApp = createApp(App);
const pinia = createPinia();

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

// Add Vue Router to the app
myApp.use(router);
myApp.use(pinia); // use pinia

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
