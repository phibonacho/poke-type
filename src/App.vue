<template>
  <main class="main__container" ref="main_container">
    <div class="w-full z-10 h-fit flex flex-col justify-center pt-4">
      <List label="Tipo attaccante" name="types" :options="options" placeholder="Seleziona"
            @selected="onChange"></List>
    </div>
    <Modal :expanded="!!selected" @close="deselect">
      <h2 v-if="modalTitle" class="uppercase text-2xl pb-2 border-b-2 mb-4 font-bold" :class="`border-${selected} text-${selected}`">{{ modalTitle }}</h2>
      <detail-section v-if="selected && effects.length > 0" title="Super efficace" :items="effects"></detail-section>
      <detail-section v-if="selected && uneffects.length > 0" title="Poco efficace" :items="uneffects"></detail-section>
      <detail-section v-if="selected && noeffects.length > 0" title="Nessun effetto"
                      :items="noeffects"></detail-section>
    </Modal>
  </main>
  <footer class="footer__container">
    <p class="text-sm text-center py-2 w-full text-slate-800">v{{ version }}</p>
  </footer>
  <div role="alert"
       v-if="needRefresh"
       class="fixed inset-x-2 bottom-2 bg-blue-200 px-4 py-3 text-blue-600 border border-blue-400 rounded-md z-50">
    <div class="flex flex-row justify-around">
      <p>
        Nuova versione disponibile
      </p>
      <button class="font-semibold" @click="updateServiceWorker()">INSTALLA</button>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import List from "@/components/List";
import {getDocs, collection} from "firebase/firestore";
import {db} from "@/firebase";
import DetailSection from "@/components/DetailSection";
import {useRegisterSW} from "virtual:pwa-register/vue";

export default {
  name: 'App',
  setup() {
    const {offlineReady, needRefresh, updateServiceWorker} = useRegisterSW();
    const close = async () => {
      offlineReady.value = false;
      needRefresh.value = false;
    };
    return {offlineReady, needRefresh, updateServiceWorker, close};
  },
  components: {
    Modal,
    DetailSection,
    List
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
    modalTitle() {
      if (this.selected && this.types[this.selected])
        return this.types[this.selected].name;

      return false;
    },
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
    },
    deselect() {
      this.selected = undefined;
    }
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Inter', sans-serif;
}

.main__container {
  @apply px-4 md:px-8 pb-8 md:pt-16 grow flex flex-col items-center w-full md:max-w-screen-sm mx-auto;
}

.footer__container {
}

</style>
