<template>
  <div class="container">
    <div class="before">
      <Uploader />
    </div>

    <div class="options">
      <p class="label_field_pair">
        <label for="checkbox1">Red Eye Reduction</label>
        <input type="checkbox" id="checkbox1" v-model="boolean1" />
      </p>
      <p class="label_field_pair">
        <label for="checkbox2">Sharpen Image</label>
        <input type="checkbox" id="checkbox2" v-model="boolean2" />
      </p>
      <p class="label_field_pair">
        <label for="checkbox3">Portriate Mode</label>
        <input type="checkbox" id="checkbox3" v-model="boolean3" />
      </p>
      <p class="label_field_pair">
        <label for="checkbox4">Film Effect</label>
        <input type="checkbox" id="checkbox4" v-model="boolean4" />
      </p>
      <p class="label_field_pair">
        <label for="checkbox5">Add Pouty Lips</label>
        <input type="checkbox" id="checkbox5" v-model="boolean5" />
      </p>
      <form>
        <span>Color Filter</span>
        <br />
        <input type="radio" name="color" value="standard" v-model="picked" />
        <input
          type="radio"
          name="color"
          value="brown-filter"
          v-model="picked"
        />
        <input type="radio" name="color" value="blue-filter" v-model="picked" />

        <br />
        <img class="color-square" src="../assets/white.png" alt />
        <img class="color-square" src="../assets/brown.png" alt />
        <img class="color-square" src="../assets/blue.png" alt />
      </form>
    </div>
    <button class="button" v-on:click="makePerfect()">
      Make this Picture Perfect!
    </button>
    <img class="after" :src="image" />
  </div>
</template>

<script>
import Uploader from '@/components/Uploder.vue'

export default {
  name: 'Checkboxes',
  components: {
    Uploader
  },
  data: () => ({
    image: 'attempt',
    boolean1: false,
    boolean2: false,
    boolean3: false,
    boolean4: false,
    boolean5: false,
    picked: 'place'
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
      if (this.picked == 'standard') {
        return require('../assets/standard/' + pic)
      } else if (this.picked == 'brown-filter') {
        return require('../assets/brown-filter/' + pic)
      } else if (this.picked == 'blue-filter') {
        return require('../assets/blue-filter/' + pic)
      }
    },
    makePerfect() {
      this.image = this.getImgUrl(this.getTedPicture)
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: [first] auto [line2] auto [line4] 80px [line5] 80px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}

.options {
  grid-column-start: line4;
  grid-column-end: span end;
  grid-row-start: 2;
  grid-row-end: span 2;
  border-radius: 10px;
  background: #bada55;
  /* height: 200px; */
  /* width: 200px; */
}

.before {
  grid-column-start: first;
  grid-column-end: span line2;
  grid-row-start: 2;
  grid-row-end: span 2;
  border-radius: 10px;
}

.after {
  grid-column-start: line2;
  grid-column-end: span line4;

  grid-row-start: 2;
  grid-row-end: span 2;
  border-radius: 10px;
}

.color-square {
  height: 23px;
}

button {
  margin-top: 4px;
  grid-column-start: line4;
  grid-column-end: span end;
  grid-row-start: 4;
  border-radius: 10px;
  background: #8be9e9;
  border-width: 0ch;
}

label,
input[type='checkbox'] {
  display: inline-block;
  margin-top: 6px;
}

label {
  width: 10em;
}

table {
  width: 10%;
  table-layout: fixed;
}
th {
  text-align: left;
}
</style>
