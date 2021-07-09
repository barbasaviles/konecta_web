<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
      <div class="sidebar-brand-icon">
        <i class="fas fa-fire-alt"></i>
      </div>
<!--      <div class="sidebar-brand-text mx-3">konecta <span class="small m-0">{{nom_rol}}</span></div>-->

    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <a class="nav-link" href="/">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Inicio</span></a>
    </li>
<!--    <menu-element :modulo="modulo" v-for="modulo in modulos" v-bind:key="modulo.id"></menu-element>-->
    <div class="text-center d-none d-md-inline">
      <button @click="collapse" class="rounded-circle border-0" id="sidebarToggle"><i class=""></i></button>
    </div>
  </ul>
</template>

<script>
    import menuElement from '@views/index/menuElement';
    import modal from '@components/base/Modal'

    export default {
        name: "app-menu",
        components: {
            'menu-element': menuElement,
            'modal': modal
        },
      methods:{
          collapse(){
              $("body").toggleClass("sidebar-toggled");
              $(".sidebar").toggleClass("toggled");
              if ($(".sidebar").hasClass("toggled")) {
                $('.sidebar .collapse').collapse('hide');
              };
          }
      },
        computed: {
            // modulos() {
            //     return this.$store.state.menu;
            // },
            // usuario() {
            //     return this.$store.state.usuario;
            // },
            // nom_rol(){
            //   return this.$store.state.nom_rol;
            // }
            // propietario() {
            //     return this.$store.state.propietario;
            // },
            // aplicacion() {
            //     return this.$store.state.aplicacion;
            // },
            // rol() {
            //     return this.$store.state.rol
            // }
        },
        watch: {
            modulos() {
                // this.$nextTick(() => template.buildNavigation($('#js-nav-menu')));
            },
        }
    }
</script>