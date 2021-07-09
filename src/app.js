import Vue from 'vue'
import router from './router.js'
import './plugins'
import App from '@views/App.vue'
const context = require.context('./components/base', false, /\.vue$/);

context.keys().forEach(mod => {
    let comp = context(mod).default;
    Vue.component(comp.name, comp);
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

if (USE_SERVICEWORKER) {
    import('offline-plugin/runtime').then(OfflinePluginRuntime => OfflinePluginRuntime.install({
        onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
        onUpdated: () => window.location.reload()
    }))
}