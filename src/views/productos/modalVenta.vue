<template>
  <modal title="Venta" ref="modal" icon="fad fa-calculator" width="30%">
    <div class="row">
      <div class="form-group col-lg-6">
        <label>Nombre producto</label>
        <div class="input-group input-group-sm">
          <select-productos v-model="id" @data="selectData"></select-productos>
          <div class="text-danger" v-if="$v.id.$dirty && !$v.id.required">Es obligatorio</div>
        </div>
      </div>
      <div class="form-group col-lg-6">
        <label>Cantidad</label>
        <div class="input-group input-group-sm">
          <input v-model="can" min="1" type="number" class="form-control form-control-sm text-center"/>
        </div>
        <div class="text-danger" v-if="$v.can.$dirty && !$v.can.required">Es obligatorio</div>
      </div>
    </div>
    <div class="form-group col-lg-6">
      <label>Precio</label>
      $ {{precio}}
    </div>
    <div class="form-group col-lg-6">
      <label>Total</label>
      $ {{total}}
    </div>
    <template slot="buttons">
      <button @click="guardar" class="btn btn-sm btn-icon-split btn-primary">
        <span class="icon"><i class="fad fa-save"></i></span>
        <span class="text">Guardar Venta</span>
      </button>
    </template>
  </modal>
</template>

<script>
import api from '@src/api'
import SelectProductos from "../../components/SelectProductos";
import {required} from "vuelidate/lib/validators";
import Swal from "sweetalert2";
export default {
  name: "modalVenta",
  components: {SelectProductos},
  data(){
    return {
      id:'',
      can:1,
      precio:0
    }
  },
  validations: {
    id: {required},
    can: {required},
  },
  methods:{
    guardar(){
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let data = Object.assign({}, this.$data);
      data.total = this.total
      Swal.fire("Almacenando información de la venta", "Por favor espere...")
      Swal.showLoading();
      api.post("productos/venta", data).then(resp => {
        Swal.close()
        if(resp.data.estado == 'success') {
          this.$emit('load', resp.data.payload);
          this.$refs.modal.close()
        }else{
          Swal.fire("Ooh!",resp.data.mensaje,resp.data.estado)
        }
      })
    },
    selectData(data){
      this.precio = data[0].precio
    }
  },
  computed:{
    total(){
      return this.can*this.precio
    }
  }
}
</script>

<style scoped>

</style>