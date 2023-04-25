<template>
  <ul
      class="list"
      ref="list">
    <li
        class="list__item"
        v-bind:key="id" v-for="({id, name}, index) in options">
      <button @click="select(index)" class="w-full rounded-md overflow-clip">
        <t-icon :name="id" :label="name"></t-icon>
      </button>
    </li>
  </ul>
</template>

<script>
import {nextTick} from "vue";
import TIcon from "@/components/TIcon";

export default {
  name: 'List',
  emits: ["selected"],
  components: {
    TIcon
  },

  props: {
    name: String,
    options: Array,
  },
  data() {
    return {
      activeIndex: 0,
      selectedIndex: null,
      expanded: false
    }
  },
  computed: {
    selected() {
      return this.selectedIndex != null ? this.options[this.selectedIndex].name : this.placeholder
    },
    icon() {
      return this.selectedIndex != null ? this.options[this.selectedIndex].id : '';
    }
  },
  methods: {
    select(index) {
      this.$emit('selected', this.options[index].id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  @apply text-lg text-center w-full block font-semibold text-white uppercase text-xs;
}

.list {
  @apply cursor-pointer focus:outline-0 md:h-fit;
  @apply grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-2 md:gap-3;
  @apply md:max-w-screen-md md:mx-auto md:m-0 md:h-fit;
}

.list__item {

}

.list__item[aria-selected="true"] {
  @apply bg-blue-200;
}

.list:focus-visible .list__item--active {
  @apply ring ring-inset ring-blue-500;
}
</style>
