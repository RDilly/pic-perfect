<template>
  <div>
    <div class="boxes">
      <input type="checkbox" id="checkbox" v-model="boolean1" />
      <label for="checkbox">Red Eye Reduction</label>
      <input type="checkbox" id="checkbox" v-model="boolean2" />
      <label for="checkbox">Sharpen Image</label>
      <input type="checkbox" id="checkbox" v-model="boolean3" />
      <label for="checkbox">Portriate Mode</label>
      <input type="checkbox" id="checkbox" v-model="boolean4" />
      <label for="checkbox">Film Effect</label>
      <input type="checkbox" id="checkbox" v-model="boolean5" />
      <label for="checkbox">Add Pouty Lips</label>
    </div>
    <button v-on:click="makePerfect()">Make this Picture Perfect!</button>
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: 'Checkboxes',
  data: () => ({
    image: 'attempt',
    boolean1: false,
    boolean2: false,
    boolean3: false,
    boolean4: false,
    boolean5: false
  }),
  computed: {
    getTedPicture() {
      var slot1 = Number(this.boolean1)
      var slot2 = Number(this.boolean2)
      var slot3 = Number(this.boolean3)
      var slot4 = Number(this.boolean4)
      var slot5 = Number(this.boolean5)
      return (
        `${slot1}` + `${slot2}` + `${slot3}` + `${slot4}` + `${slot5}` + '.png'
      ) // eslint-disable-line no-use-before-define
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/standard/' + pic)
    },
    makePerfect() {
      this.image = this.getImgUrl(this.getTedPicture)
    }
  }
}
</script>

<style scoped>
.boxes {
  display: flex;
  flex-direction: column;
}

table {
  width: 100%;
  table-layout: fixed;
}
th {
  text-align: left;
}
</style>
