<template>
    <li class="nav-item">
        <router-link class="nav-link" v-if="!modulo.children.length" @click.native="saveModule(modulo)" :to="'/' + modulo.nom_modulo" :title="modulo.descripcion">
            <i :class="modulo.icon"></i>
            <span class="nav-link-text">{{modulo.nom_mostrar}}</span>
        </router-link>
        <template v-else>
            <a href="#" :title="modulo.descripcion">
                <i :class="modulo.icon"></i>
                <span class="nav-link-text">{{modulo.nom_mostrar}}</span>
            </a>
            <ul>
                <menu-element v-for="children in modulo.children" :modulo="children" :key="children.id"></menu-element>
            </ul>
        </template>
    </li>
</template>

<script>
    export default {
        name: "menuElement",
        props: {modulo: Object},
        methods: {
            saveModule(module) {
                this.$store.commit('setCurrentModule', module);
            }
        }
    }
</script>