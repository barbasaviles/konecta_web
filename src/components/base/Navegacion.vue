<template>
    <div class="page-header page-header-light">
        <div class="page-header-content header-elements-md-inline">
            <div class="page-title d-flex" style="padding: 1em" v-if="showButtonHide">
                <slot name="titulo">
                    <h4>
                        <i :class="modulo.icon" class="mr-2"></i><span class="font-weight-semibold">{{modulo.nom_mostrar}}</span>
                    </h4>
                </slot>
                <button @click="hideShowButtons = !hideShowButtons" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></button>
            </div>

            <div class="header-elements" :class="{'d-none': !hideShowButtons}">
                <div class="d-flex justify-content-center">
                    <slot></slot>
                </div>
            </div>
        </div>

        <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
            <div class="d-flex">
                <div class="breadcrumb">
                    <router-link class="breadcrumb-item" to="/"><i class="icon-home2 mr-2"></i> Inicio</router-link>
                    <slot name="breadcrumb">
                        <span class="breadcrumb-item" v-for="r in modulo.ruta">{{r}}</span>
                    </slot>
                </div>

                <a class="header-elements-toggle text-default d-md-none" href="#"><i class="icon-more"></i></a>
            </div>

            <div class="header-elements d-none">
                <div class="breadcrumb justify-content-center">
                    <slot name="links">

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navegacion',
        props: {
            showButtonHide: {
                type: Boolean,
                default: true
            }
        },
        data(){
          return {
              hideShowButtons: true
          }
        },
        computed: {
            modulo() {
                // return this.$store.state.currentModule
            }
        }
    }
</script>
