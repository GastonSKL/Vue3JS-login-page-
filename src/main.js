import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "../src/router/index.js";


const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);


app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
