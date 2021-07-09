<template>
  <modal title="Producto" ref="modal" icon="fad fa-tag" width="40%">
    <div class="row">
        <div class="form-group col-lg-6">
          <label>Nombre producto</label>
          <div class="input-group input-group-sm">
            <input v-model="nom" maxlength="100" class="form-control form-control-sm"/>
          </div>
          <div class="text-danger" v-if="$v.nom.$dirty && !$v.nom.required">Es obligatorio</div>
        </div>
        <div class="form-group col-lg-6">
          <label>Referencia</label>
          <div class="input-group input-group-sm">
            <input v-model="ref" maxlength="100" class="form-control form-control-sm"/>
          </div>
          <div class="text-danger" v-if="$v.ref.$dirty && !$v.ref.required">Es obligatoria</div>
        </div>
      <div class="form-group col-lg-6">
        <label>Categoria</label>
        <div class="input-group input-group-sm">
          <input v-model="cat" maxlength="100" class="form-control form-control-sm"/>
        </div>
        <div class="text-danger" v-if="$v.cat.$dirty && !$v.cat.required">Es obligatoria</div>
      </div>
      <div class="form-group col-lg-6">
        <label>Peso</label>
        <div class="input-group input-group-sm">
          <input v-model="peso" type="number" class="form-control form-control-sm"/>
        </div>
        <div class="text-danger" v-if="$v.peso.$dirty && !$v.peso.required">Es obligatoria</div>
      </div>
      <div class="form-group col-lg-6">
        <label>Precio</label>
        <div class="input-group input-group-sm">
          <input v-model="precio" maxlength="100" class="form-control form-control-sm"/>
        </div>
        <div class="text-danger" v-if="$v.precio.$dirty && !$v.precio.required">Es obligatoria</div>
      </div>
      <div class="form-group col-lg-6">
        <label>Stock</label>
        <div class="input-group input-group-sm">
          <input v-model="stock" type="number" class="form-control form-control-sm"/>
        </div>
        <div class="text-danger" v-if="$v.stock.$dirty && !$v.stock.required">Es obligatoria</div>
      </div>
    </div>
    <template slot="buttons">
      <button @click="guardar" class="btn btn-sm btn-icon-split btn-primary">
        <span class="icon"><i class="fad fa-save"></i></span>
        <span class="text">{{id ? 'Actualizar':'Guardar'}}</span>
      </button>
    </template>
  </modal>
</template>

<script>
import {minLength, required} from 'vuelidate/lib/validators'
import Swal from "sweetalert2";
export default {
  name: "modalProducto",
  props:['id'],
  data(){
    return {
      nom:'',
      ref:'',
      cat:'',
      stock:'',
      precio:'',
      peso:'',

    }
  },
  validations: {
    nom: {required},
    ref: {required},
    cat: {required},
    precio: {required},
    peso: {required},
    stock: {required},
  },
  mounted() {

  },
  methods:{
    guardar(){
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let data = Object.assign({}, this.$data);
      data.id = this.id
      Swal.fire("Almacenando información del producto", "Por favor espere...")
      Swal.showLoading();
      api.post("productos/guardar", data).then(resp => {
        if(resp.data.estado =='warning' ) Swal.fire('Nombre del producto',resp.data.mensaje,resp.data.estado)
        else{ this.$emit('loadProducto',resp.data.payload); this.$refs.modal.close()}
      })
    }
  }
}
</script>

<style scoped>

</style>