import Vue from 'vue';
import VueRouter from 'vue-router'
import index from './src/components/index.vue'
import editar from './src/components/editar.vue'
import HelloWorld from './src/components/tabla.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/",
            component:index,

        },{
            path:"/hola",
            component:HelloWorld,
        },
        {
            path:"/editar/:id",
            component:editar,
        },
    
    ]
});

export default router