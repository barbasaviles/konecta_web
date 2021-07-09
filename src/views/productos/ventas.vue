<template>
  <div class="card">
    <div class="card-header py-2 d-flex flex-row align-items-center justify-content-between">
      <h6>Ventas</h6>

      <div class="dropdown">
        <router-link to="/productos" class="btn btn-secondary btn-icon-split btn-sm">
          <span class="icon"><i class="fad fa-tags"></i></span>
          <span class="text">Productos</span>
        </router-link>
        <router-link :to="$route.fullPath+'/new'" class="btn btn-primary btn-icon-split btn-sm">
          <span class="icon"><i class="fad fa-calculator"></i></span>
          <span class="text">Nueva Venta</span>
        </router-link>
      </div>
    </div>
    <div class="card-body">
      <table class="table table-bordered table-hover table-striped">
        <thead>
        <tr>
          <td>Nombre producto</td>
          <td>Cantidad</td>
          <td>Total</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(ven,index) in ventas">
          <td>{{ ven.nom_producto }}</td>
          <td class="text-center">{{ ven.cantidad }}</td>
          <td class="">${{ ven.total }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <router-view @load="load"></router-view>
  </div>
</template>

<script>
import api from '@src/api'
export default {
  name: "ventas",
  data() {
    return {
      ventas: []
    }
  },
  mounted() {
    this.listarVentas()
  },
  methods: {
    listarVentas() {
      api.get('productos/ventas').then(resp => {
        this.ventas = resp.data
      })
    },
    load() {
      console.log('reload')
      this.listarVentas()
    }
  }
}
</script>

<style scoped>

</style>