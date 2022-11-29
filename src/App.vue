<template>
  <main class="main__container">
    <div class="md:mx-auto">
      <DropDown label="Tipo attaccante" name="types" :options="options" placeholder="Seleziona un tipo"
                @dropdown-selected="(val) => this.selected = val"></DropDown>
      <div v-if="selected" class="mt-4 ">
        <h2 class="mb-2">Super efficace su:</h2>
        <ul class="p-4 rounded-md border border-blue-300">
          <li v-bind:key="index" v-for="({name, id}, index) in effects" class="flex flex-row py-2 px-4">
            <t-icon :name="id"/>
            <span class="ml-2">{{ name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
  <footer class="footer__container">
    <p class="text-sm text-center py-2 w-full text-blue-500">v{{ version }}</p>
  </footer>
</template>

<script>
import DropDown from "@/components/Dropdown";
import TIcon from "@/components/TIcon";
import {getDocs, collection} from "firebase/firestore";
import {db} from "@/firebase";

export default {
  name: 'App',
  components: {
    DropDown,
    TIcon
  },
  data() {
    return {
      types: {},
      loaded: false,
      selected: null
    }
  },
  mounted() {
    if (!this.loaded)
      this.fetchTypes().then(data => {
        this.types = data;
        this.loaded = true;
      })
  },
  computed: {
    options() {
      return Array.from(Object.keys(this.types))
          .sort((a, b) => this.types[a].order - this.types[b].order)
          .map((id) => {
            const {name} = this.types[id];
            return {
              id,
              name
            }
          });
    },
    effects() {
      return this.selected
          ? this.types[this.selected].effects.map(id => ({id, name: this.types[id].name}))
          : [];
    },
    version() {
      return __APP_VERSION__
    }
  },
  methods: {
    async fetchTypes() {
      let typesData = {};
      const snapshot = await getDocs(collection(db, "types"));

      snapshot.forEach((doc) => {
        typesData[doc.id] = {
          id: doc.id,
          name: doc.data().name,
          effects: doc.data().effects.map(({id}) => id),
          order: doc.data().order
        };
      });

      return typesData;
    }
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

#app {
  @apply flex flex-col min-h-screen;
}

.main__container {
  @apply grow flex flex-col justify-center items-center w-full;
}

.footer__container {

}

</style>
