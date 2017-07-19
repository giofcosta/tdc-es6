import Home from './components/home.vue'
import Users from './components/users.vue'
import About from './components/about.vue'

export const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/Users',
        component: Users
    },
    {
        path: '/About',
        component: About
    }
]