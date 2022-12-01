<template>
  <main class="main__container bg-gradient-to-t from-slate-800 via-slate-800" :class="`to-${selected}`" ref="main_container">
    <div class="w-full z-10 h-[300px] md:h-fit flex flex-col justify-center">
      <DropDown label="Tipo attaccante" name="types" :options="options" placeholder="Seleziona"
                @dropdown-selected="onChange"></DropDown>
    </div>
      <detail-section v-if="selected && effects.length > 0" title="Super efficace" :items="effects"></detail-section>
      <detail-section v-if="selected && uneffects.length > 0" title="Poco efficace" :items="uneffects"></detail-section>
      <detail-section v-if="selected && noeffects.length > 0" title="Nessun effetto" :items="noeffects"></detail-section>
  </main>
  <footer class="footer__container">
    <p class="text-sm text-center py-2 w-full text-white">v{{ version }}</p>
  </footer>
</template>

<script>
import DropDown from "@/components/Dropdown";
import {getDocs, collection} from "firebase/firestore";
import {db} from "@/firebase";
import DetailSection from "@/components/DetailSection";
import {useRegisterSW} from "virtual:pwa-register/vue";

export default {
  name: 'App',
  setup() {
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
    const close = async () => {
      offlineReady.value = false;
      needRefresh.value = false;
    };
    return { offlineReady, needRefresh, updateServiceWorker, close };
  },
  components: {
    DropDown,
    DetailSection
  },
  data() {
    return {
      types: {},
      loaded: false,
      selected: null,
      colors: {
        'normal': '#A8A77A',
        'fire': '#EE8130',
        'water': '#6390F0',
        'electric': '#F7D02C',
        'grass': '#7AC74C',
        'ice': '#96D9D6',
        'fighting': '#C22E28',
        'poison': '#A33EA1',
        'ground': '#E2BF65',
        'flying': '#A98FF3',
        'psychic': '#F95587',
        'bug': '#A6B91A',
        'rock': '#B6A136',
        'ghost': '#735797',
        'dragon': '#6F35FC',
        'dark': '#705746',
        'steel': '#B7B7CE',
        'fairy': '#D685AD'
      }
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
    uneffects() {
      return this.selected
          ? this.types[this.selected].uneffects.map(id => ({id, name: this.types[id].name}))
          : [];
    },
    noeffects() {
      return this.selected
          ? this.types[this.selected].noeffects.map(id => ({id, name: this.types[id].name}))
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
          uneffects: doc.data().uneffects.map(({id}) => id),
          noeffects: doc.data().noeffects.map(({id}) => id),
          order: doc.data().order
        };
      });

      return typesData;
    },
    onChange(type) {
      this.selected = type;
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

body {
  @apply bg-slate-800;
}

#app {
  @apply flex flex-col min-h-screen overflow-y-scroll;
}

.main__container {
  @apply px-4 pb-8 md:px-0 md:pt-16 grow flex flex-col items-center w-full md:max-w-screen-sm mx-auto;
}

.footer__container {
  @apply bg-slate-800;
}

</style>
