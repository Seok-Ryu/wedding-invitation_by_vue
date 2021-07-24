import Vue from 'vue';
import VueRouter from 'vue-router';
// import Index from '@/components/Index';
import Index from '@/views/Index';
import Test from '@/views/Test';
import Privacy from '@/views/privacy';


Vue.use(VueRouter);

export default new VueRouter({
    // mode: "history",
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: '/privacy',
            name: 'Privacy',
            component: Privacy,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
    ],
});
