import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import RoupasPage from './components/RoupasPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/roupas', component: RoupasPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
