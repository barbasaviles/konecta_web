<template>
  <div id="wrapper">
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <main class="container-fluid">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import '@assets/css/sb-admin-2.min.css'
import '@assets/css/all.min.css'

require('@assets/js/sb-admin-2')
require('@assets/js/bootstrap.bundle.min')

import AppContent from '@views/index/content.vue';
import api from '@src/api'
export default {
  name: 'App',
  components:{AppContent},
  data(){
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>