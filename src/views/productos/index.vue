<template>
  <div class="card">
    <div class="card-header py-2 d-flex flex-row align-items-center justify-content-between">
      <h6>Listado de productos</h6>

      <div class="dropdown">
        <router-link to="ventas" class="btn btn-secondary btn-icon-split btn-sm mr-2">
          <span class="icon"><i class="fad fa-calculator"></i></span>
          <span class="text">Ventas</span>
        </router-link>
        <router-link :to="$route.fullPath+'/new'" class="btn btn-primary btn-icon-split btn-sm">
          <span class="icon"><i class="fad fa-tag"></i></span>
          <span class="text">Nuevo</span>
        </router-link>
      </div>
    </div>
    <div class="card-body">
      <table class="table table-bordered table-hover table-striped">
        <thead>
        <tr>
          <td>Id</td>
          <td>Nombre producto</td>
          <td>Referencia</td>
          <td>Precio</td>
          <td>Peso</td>
          <td>Categoria</td>
          <td>Stock</td>
          <td>Fecha</td>
          <td>Fecha Ultima Venta</td>
          <td>...</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(pro,index) in productos">
          <td class="text-center">{{pro.id}}</td>
          <td>{{pro.nom_producto}}</td>
          <td class="text-center">{{pro.referencia}}</td>
          <td class="">${{pro.precio}}</td>
          <td class="text-center">{{pro.peso}}</td>
          <td class="text-center">{{pro.categoria}}</td>
          <td class="text-center">{{pro.stock}}</td>
          <td class="text-center">{{pro.fecha_creacion}}</td>
          <td>{{pro.fecha_ultima_venta}}</td>
          <td class="text-center">
            <router-link :to="$route.fullPath+'/edit/'+pro.id" class="btn btn-primary btn-icon-split btn-sm">
              <span class="icon"><i class="fad fa-sync"></i></span>
            </router-link>
            <button @click="eliminar(pro.id,index)" class="btn btn-danger btn-icon-split btn-sm">
              <span class="icon"><i class="fad fa-trash-alt"></i></span>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  <router-view @load="load"></router-view>
  </div>
</template>

<script>
import api from '@src/api'
import Swal from 'sweetalert2'
import Modal from "@components/base/Modal";
export default {
  name: "index",
  components:{Modal},
  data(){
    return {
      productos : []
    }
  },
  mounted() {
    this.listarProductos()
  },
  methods: {
    listarProductos(){
      api.get('productos/inventario').then(resp=>{
        this.productos = resp.data
      })
    },
    eliminar(id,index){
      Swal.fire({
        title:'Esta seguro de Eliminar el producto?',
        icon:'question',
        html:'Tenga mucho cuidado',
        confirmButtonText:'Si, estoy seguro !',
        confirmButtonColor:'red',
        cancelButtonText:'Cancelar',
        cancelButtonColor:'blue',
        showCancelButton:true
      }).then(option=>{
        if(option.isConfirmed){
          api.post('productos/eliminar',{id}).then(resp=>{
            this.productos.splice(index, 1);
          })

        }
      })
    },
    load(){
      console.log('reload')
      this.listarProductos()
    }
  }

}
</script>

<style scoped>

</style>