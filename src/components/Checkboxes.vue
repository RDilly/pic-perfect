<template>
  <v-container fluid grid-list-xl grey lighten-5>
    <v-layout row>
      <v-flex d-flex>
        <v-layout row justify-space-around>
          <v-card width="435" height="435">
            <v-card-title primary class="title">Before</v-card-title>
            <Uploader />
          </v-card>
          <v-card width="435" height="435">
            <v-card-title primary class="title">After</v-card-title>
            <img
              class="justify-space-around ml-12"
              width="335"
              height="335"
              :src="image"
              pa-4
            />
          </v-card>

          <v-flex>
            <v-layout row>
              <v-flex d-flex>
                <v-card xs3 dark color="secondary">
                  <v-flex column>
                    <v-form>
                      <v-flex column pl-4>
                        <v-checkbox
                          v-model="boolean1"
                          label="Reduce Red Eye"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="boolean2"
                          label="Sharpen Image"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="boolean3"
                          label="Portriat Mode"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="boolean4"
                          label="Film Effect"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="boolean5"
                          label="Add Pouty Lips"
                        ></v-checkbox>
                        <!-- <v-container grid-list-xs3> -->
                        <v-radio-group
                          v-model="picked"
                          :mandatory="true"
                          column
                        >
                          <v-flex no-gutters px-0 py-1 mx-0>
                            <span>Choose Color Filter</span>
                            <v-flex row no-gutters px-0 py-1 mx-0>
                              <v-radio
                                value="standard"
                                color="grey lighten-3"
                              ></v-radio>
                              <v-radio
                                value="brown-filter"
                                color="brown lighten-2"
                              ></v-radio>
                              <v-radio
                                value="blue-filter"
                                color="cyan lighten-4"
                              ></v-radio>
                            </v-flex>
                          </v-flex>
                        </v-radio-group>
                      </v-flex>
                    </v-form>
                    <v-btn color="info" v-on:click="makePerfect()">
                      <span class="white--text font-weight-light">
                        Make This
                        <br />Picture Perfect!
                      </span>
                    </v-btn>
                  </v-flex>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Uploader from '@/components/Uploder.vue'

export default {
  name: 'Checkboxes',
  components: {
    Uploader
  },
  data: () => ({
    image: '@/assets/standard/11111.png',
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

/* .after {
  grid-column-start: line2;
  grid-column-end: span line4;
  grid-row-start: 2;
  grid-row-end: span 2;
  border-radius: 10px;
} */

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
