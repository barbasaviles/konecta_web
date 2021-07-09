<template>
  <div class="card vue-avatar-cropper-demo text-center">
    <div class="card-body">
      <img :src="urlfile" class="card-img avatar" />
      <div class="card-img-overlay">
        <button class="btn btn-primary btn-sm" :id="idTrigger">Seleccione imagen</button>
      </div>
    </div>
    <div class="card-footer text-muted" v-html="message"></div>
    <avatar-cropper
        :labels="{submit:'Cargar',cancel:'Cancelar'}"
        @changed="getFileData"
        :uploadHandler="upload"
        :trigger="'#'+idTrigger" />
  </div>
</template>

<script>
import AvatarCropper from "vue-avatar-cropper";
import imgDefault from "@assets/img/avatars/1472352.png"
import {getToken,default as api} from '@src/api'
export default {
  props:{
    idTrigger:{type:String, default:'pick-avatar'},
    imageDefault:{type:String},
    showMessage:{default:'Imagen'},
    folder:{default:'common'},
    value: [String, Number]
  },
  components: { AvatarCropper },
  data() {
    return {
      file:{},
      message:'Imagen',
      urlfile:imgDefault,
    };
  },
  mounted() {
    if(this.imageDefault)
      this.urlfile = this.imageDefault;
    this.message = this.showMessage;
  },
  methods: {
    getfileapi(uuid) {
      if(uuid) {
        let url = API_ENDPOINT + '/files/getfile/' + uuid + '?access_token=';
        getToken().then(token => {
          url += token.replace('Bearer ', '');
          this.urlfile = url;
        });
      }
    },
    getFileData(file){
      this.file = file
    },
    upload(cropper){
      cropper.getCroppedCanvas({width:512,height:512}).toBlob((blob) => {
        const formData = new FormData();
        formData.append('file', blob,this.file.name);
        this.message = "Cargando...";
        api.post('files/uploadfile/'+this.folder,formData).then(resp=>{
          this.message = "Carga exitosa";
          setTimeout( ()=>{this.message=this.showMessage},5000)
          this.getfileapi(resp.data.uuid)
          this.$emit('input',resp.data.uuid)
        }).catch(error => this.message = "¡Ups! algo salio mal");
      });
    }
  },
  watch:{
    value(uuid){
        this.getfileapi(uuid)
    }
  }
};
</script>

<style>
.vue-avatar-cropper-demo {
  max-width: 18em;
  margin: 0 auto;
}
.avatar {
  width: 160px;
  border-radius: 6px;
  display: block;
  margin: 0px;
}
.card-img-overlay {
  display: none;
  transition: all 0.5s;
}
.card-img-overlay button {
  position: absolute;
  bottom: 50px;
  left: 15%;
}
.card:hover .card-img-overlay {
  display: block;
}
</style>
