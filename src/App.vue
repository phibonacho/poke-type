<template>
  <main class="main__container">
    <div class="w-full">
      <DropDown label="Tipo attaccante" name="types" :options="options" placeholder="Seleziona un tipo"
                @dropdown-selected="(val) => this.selected = val"></DropDown>
      <detail-section v-if="selected" title="Super efficace su" :items="effects"></detail-section>
    </div>
  </main>
  <footer class="footer__container">
    <p class="text-sm text-center py-2 w-full text-blue-500">v{{ version }}</p>
  </footer>
</template>

<script>
import DropDown from "@/components/Dropdown";
import {getDocs, collection} from "firebase/firestore";
import {db} from "@/firebase";
import DetailSection from "@/components/DetailSection";

export default {
  name: 'App',
  components: {
    DropDown,
    DetailSection
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
  @apply px-4 md:px-0 grow flex flex-col justify-center items-center w-full md:max-w-screen-sm mx-auto;
}

.footer__container {

}

</style>
