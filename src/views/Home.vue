<template>
  <div class="home">
    <Checkboxes />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Checkboxes from '@/components/Checkboxes.vue'
import ImageUploader from 'vue-image-upload-resize'

export default {
  name: 'home',
  components: {
    ImageUploader,
    HelloWorld,
    Checkboxes
  }
}
</script>
