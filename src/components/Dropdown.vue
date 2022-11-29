<template>
  <label>{{ label }}</label>
  <div :id="name + '_list_wrapper'" class="wrapper">
    <div
        class="trigger"
        ref="trigger"
        :id="name + '_trigger'"
        role="combobox"
        aria-haspopup="listbox"
        :aria-expanded="expanded"
        :aria-controls="name + '--list'"
        tabindex="0"
        @click="openMenu"
        @keyup.enter="openMenu"
        @keyup.space="openMenu">
      <t-icon :name="icon"></t-icon>
      <span class="trigger__label">{{ selected }}</span>
    </div>
    <ul class="list"
        ref="list"
        role="listbox"
        tabindex="-1"
        :id="name + '_list'"
        @keyup.esc="closeMenu"
        @keyup.up="moveUp"
        @keyup.down="moveDown"
        @blur="focusLost"
        @keyup.space="selectActive"
        @keyup.enter="selectActive">
      <li
          class="list__item"
          :class="activeIndex === index && 'list__item--active'"
          v-bind:key="id" v-for="({id, name}, index) in options"
          @click="select(index)"
          @hover="moveTo(index)"
          role="option"
          :aria-selected="selectedIndex===index">
        <t-icon :name="id"></t-icon>
        <span class="list__item__label">{{ name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {nextTick} from "vue";
import TIcon from "@/components/TIcon";

export default {
  name: 'Drop-down',
  emits: ["dropdown-selected"],
  components: {
    TIcon
  },

  props: {
    name: String,
    label: String,
    placeholder: String,
    options: Array,
  },
  data() {
    return {
      activeIndex: 0,
      selectedIndex: null,
      expanded: false
    }
  },
  watch: {
    selectedIndex(newIndex) {
      this.$emit('dropdown-selected', this.options[newIndex].id);
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
      this.selectedIndex = index;
      this.closeMenu();
    },
    async openMenu() {
      this.expanded = true;
      await nextTick();
      this.$refs.list.focus();
    },
    closeMenu() {
      this.expanded = false;
      this.$refs.trigger.focus();
    },
    focusLost() {
      this.expanded = false;
    },
    moveUp() {
      this.activeIndex = Math.max(this.activeIndex - 1, 0)
    },
    moveDown() {
      this.activeIndex = Math.min(this.activeIndex + 1, this.options.length - 1)
    },
    moveTo(index) {
      this.activeIndex = index;
    },
    selectActive() {
      this.selectedIndex = this.activeIndex;
      this.closeMenu();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  @apply text-lg;
}

.wrapper {
  @apply md:relative mt-1;
}

.trigger {
  @apply p-4 rounded-md border border-blue-400 min-w-[240px] cursor-pointer flex flex-row;
}

.trigger__label {
  @apply ml-2;
}

.trigger[aria-expanded="true"] + .list {
  @apply block;
}

.list {
  @apply m-8 md:m-0 absolute hidden overflow-scroll md:h-fit inset-0 rounded-md md:inset-x-0 md:top-1/2 md:-translate-y-1/2 bg-white border border-blue-400 cursor-pointer;
}

.list__item {
  @apply px-4 py-2 border-b border-b-blue-100 last:border-b-0 flex flex-row items-center
}

.list__item__label {
  @apply ml-2;
}

.list__item[aria-selected="true"] {
  @apply bg-blue-200;
}

.list:focus-visible .list__item--active {
  @apply ring ring-inset ring-blue-400;
}

</style>
