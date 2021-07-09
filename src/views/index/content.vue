<template>
  <div class="animated--fade-in">
    <div class="">
      <productos></productos>
    </div>
  </div>
</template>

<script>

import productos from '@src/views/productos/index'

export default {
  name: "app-content",
  components:{productos},
  computed: {

  }
}
</script>