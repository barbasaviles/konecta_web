<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" @click="collapse" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fas fa-bars"></i>
    </button>
    <!-- Organizacion -->
<!--    <span class="text-uppercase mr-2 font-weight-bold">{{rol}}</span>-->
    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
           aria-haspopup="true" aria-expanded="false">
<!--          <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{usuario}}</span>-->
          <img class="img-profile rounded-circle" src="@assets/img/avatars/avatar_run.png">
        </a>
        <!-- Dropdown - User Information -->
        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <router-link class="dropdown-item" to="/perfil">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Perfil
          </router-link><router-link class="dropdown-item" to="/configuracion">
            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Configuración
          </router-link>
          <div class="dropdown-divider"></div>
<!--          <a @click="cerrarSession" class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">-->
<!--            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>-->
<!--            cerrar sesion-->
<!--          </a>-->
        </div>
      </li>

    </ul>

  </nav>
</template>

<script>
import {getToken, keycloak, default as api} from "@src/api";

export default {
  name: "app-header",
  computed: {
    // usuario() {
    //       return this.$store.state.usuario.nombres;
    // },
    // rol() {
    //   return this.$store.state.rol
    // }
  },
  data() {
    return {
      accountUrl: null
    }
  },
  methods: {
    collapse() {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      }
    },
    // cerrarSession() {
    //   localStorage.clear();
    //   keycloak.logout({redirectUri: window.location.origin});
    // },
    // generateAccountUrl() {
    //   this.accountUrl = keycloak.createAccountUrl();
    // }
  }
}
</script>