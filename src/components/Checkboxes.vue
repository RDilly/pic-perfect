<template>
  <v-container fluid grid-list-xl grey>
    <v-layout row>
      <v-flex d-flex>
        <v-layout row justify-space-around>
          <v-flex row pa-4 justify space between>
            <p mx-0 px-0 my-0 py-0 class="grey--text">..</p>
            <v-card width="435" height="435" pa-4>
              <v-card-title primary class="title centered">Before</v-card-title>
              <Uploader />
            </v-card>
            <p mx-0 px-0 my-0 py-0 class="grey--text">...</p>
            <!-- </v-flex>
            <v-flex pa-4>-->
            <v-card width="435" height="435" pt-3>
              <v-card-title primary class="title centered">After</v-card-title>
              <img
                v-if="image.length > 0"
                class="justify-space-around ml-12"
                width="335"
                height="335"
                v-bind:src="image"
                pa-4
              />
              <img
                v-else
                class="justify-space-around ml-12"
                width="335"
                height="335"
                src="@/assets/standard/00000.png"
                pa-4
              />
            </v-card>
            <p mx-0 px-0 my-0 py-0 class="grey--text">.</p>
          </v-flex>

          <v-flex>
            <v-layout row py-1>
              <v-card dark color="secondary">
                <!-- <v-flex column py-0 my-0 justify="center" align="center"> -->
                <v-form justify="center" align="center">
                  <v-flex column pl-4 align-center justify-center>
                    <v-switch
                      v-model="boolean1"
                      label="Reduce Red Eye"
                      color="blue"
                      pa-0
                      ma-0
                    ></v-switch>
                    <v-switch
                      v-model="boolean2"
                      label="Sharpen Image"
                      color="blue"
                    ></v-switch>
                    <v-checkbox
                      v-model="boolean3"
                      label="Portriat Mode"
                      color="blue"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="boolean4"
                      label="Film Effect"
                      color="blue"
                    ></v-checkbox>
                    <v-checkbox
                      v-model="boolean5"
                      label="Add Pouty Lips"
                      color="blue"
                    ></v-checkbox>
                    <!-- <v-container grid-list-xs3> -->
                    <v-radio-group
                      v-model="picked"
                      :mandatory="true"
                      column
                      py-0
                      my-0
                    >
                      <v-flex no-gutters px-0 py-0 mx-0>
                        <span>Choose Color Filter</span>
                        <v-flex row no-gutters px-auto py-0 mx-auto>
                          <v-flex px-0 py-0 mx-0>
                            <v-radio
                              value="standard"
                              color="grey lighten-3"
                              checked="checked"
                            ></v-radio>
                          </v-flex>
                          <v-flex px-0 py-0 mx-0>
                            <v-radio
                              value="brown-filter"
                              color="brown lighten-2"
                            ></v-radio>
                          </v-flex>
                          <v-flex px-0 py-0 mx-0>
                            <v-radio
                              value="blue-filter"
                              color="cyan lighten-4"
                            ></v-radio>
                          </v-flex>
                        </v-flex>
                      </v-flex>
                    </v-radio-group>
                  </v-flex>
                </v-form>
                <v-flex>
                  <v-btn color="info" v-on:click="makePerfect()">
                    <span class="white--text font-weight-light">
                      Make This
                      <br />Picture Perfect!
                    </span>
                  </v-btn>
                </v-flex>
                <!-- </v-flex> -->
              </v-card>
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
    image: '',
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
}

label {
  width: 10em;
}

th {
  text-align: left;
}
</style>
