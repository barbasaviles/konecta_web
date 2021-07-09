import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const dynamicRoutes = [];
const context = require.context("./routes", false, /\.js$/);
context.keys().forEach(mod => dynamicRoutes.push(context(mod).default));

const routes = [].concat(
    [{path: '/', component: () => import('@views/index/content.vue'), name: 'principal', meta: {title: 'konecta'}}],
    ...dynamicRoutes,
    [{path: '*', redirect: {name: 'principal'}}]
);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    } else {
        const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
        if (nearestWithTitle) {
            document.title = nearestWithTitle.meta.title;
        }
    }

    next();
});

export default router