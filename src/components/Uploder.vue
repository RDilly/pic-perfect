<template>
  <div class="hello">
    <picture-input
      ref="pictureInput"
      width="335"
      height="335"
      margin="16"
      accept="image/jpeg, image/png"
      size="10"
      button-class="btn"
      :custom-strings="{
        upload: '<h1>Hello!</h1>',
        drag: 'Click here to choose your imperfect photo'
      }"
      @change="onChange"
    ></picture-input>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'Uploader',
  data() {
    return {}
  },
  components: {
    PictureInput
  },
  methods: {
    onChange(image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>
