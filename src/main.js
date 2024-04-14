import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'

import HomePage from './components/Home.vue'
import ChatPage from './components/Chat.vue'
import Weather from './components/Weather.vue'
import Email from './components/Email.vue'
import User from './components/User.vue'
import About from './components/About.vue'
import Sport from './components/Sport.vue'
import AddPage from './components/AddPage.vue'
import NewsPage from './components/NewsPage.vue'
import NewsPage2 from './components/NewsPage2.vue'
import NewsPage3 from './components/NewsPage3.vue'
import NewsPage4 from './components/NewsPage4.vue'
import NewsPage5 from './components/NewsPage5.vue'

const routes = [
    {path: '/', name:'Home', component: HomePage},
    {path: '/chat', name:'Chat', component: ChatPage},
    {path: '/weather', name:'Api', component: Weather},
    {path: '/email', name:'Email', component: Email},
    {path: '/sport', name:'Sport', component: Sport},
    {path: '/about', name:'About', component: About},
    {path: '/user', name:'User', component: User},
    {path: '/addpage', name:'AddPage', component: AddPage},
    {path: '/newspage', name:'NewsPage', component: NewsPage},
    {path: '/newspage2', name:'NewsPage2', component: NewsPage2},
    {path: '/newspage3', name:'NewsPage3', component: NewsPage3},
    {path: '/newspage4', name:'NewsPage4', component: NewsPage4},
    {path: '/newspage5', name:'NewsPage5', component: NewsPage5},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App)
app.use(router)
app.mount('#app')
