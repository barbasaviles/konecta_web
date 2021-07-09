import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
import noInternet from 'no-internet'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        session: false,
        isOnline: window.navigator.onLine,
        menu: [],
        config: {},
        usuario: {},
        rol: null,
        currentModule: {},
        chat: [],
        notificaciones: [],
        encuestas: []
    },
    mutations: {
        setSession(state, session) {
            state.menu = session.menu;
            state.usuario = session.usuario;
            state.nom_rol = session.nom_rol;
            state.config = session.config;
            state.session = true;
            state.aplicacion = session.aplicacion;
            state.propietario = session.propietario;
            state.rol = session.rol;
        },
        setUsuario(state,usuario){
            state.usuario = usuario;
        },
        setCurrentModule(state, module) {
            state.currentModule = module;
        },
        setOnlineStatus(state, status) {
            state.isOnline = status;
        },
        setChat(state, users) {
            state.chat = users;
        },
        setChatStatus(state, user) {
            let usr = state.chat.find(u => u.id == user.id);

            if (usr) {
                Object.keys(user).forEach(key => usr[key] = user[key]);
                state.chat.sort((p, n) => p.online ? -1 : 1);
            }
        },
        setRol(state, rol) {
            state.rol = rol;
        },
        setUpdateProfileComplete(state) {
            state.usuario.actualizar_datos = false;
        }
    },
    actions: {
        async loadSession(context) {

        },

    },
    plugins: [createPersistedState({storage: localStorage})]
});

store.dispatch('loadSession');

noInternet().then(offline => store.commit('setOnlineStatus', !offline));

window.addEventListener('online', () =>
    noInternet().then(offline => store.commit('setOnlineStatus', !offline))
);

window.addEventListener('offline', () => store.commit('setOnlineStatus', false));
export default store