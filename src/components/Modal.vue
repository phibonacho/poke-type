<template>
  <div v-show="expanded" class="modal__wrapper" aria-modal="true">
    <transition name="fade-up" appear>
      <div
          v-show="expanded"
          class="modal__container"
          ref="modal"
          role="dialog"
          tabindex="-1"
          :id="name + '_list'"
          @keyup.esc="closeMenu" @blur="closeMenu">
        <div class="modal__header">

        </div>
        <div class="modal__body">
          <slot/>
        </div>
        <div class="modal__footer">

        </div>
      </div>
    </transition>
  </div>
  <transition name="fade">
    <div v-show="expanded" class="modal__backdrop"></div>
  </transition>
</template>

<script>
import {nextTick} from "vue";

export default {
  name: 'Modal',
  emits: ["close"],
  components: {},

  props: {
    name: String,
    label: String,
    expanded: Boolean
  },
  data() {
    return {
      activeIndex: 0,
      selectedIndex: null
    }
  },
  watch: {
    expanded(isExpanded) {
      if (isExpanded) {
        nextTick(() => this.$refs.modal.focus());
      }
    }
  },
  computed: {},
  methods: {
    select(index) {
      this.selectedIndex = index;
      this.closeMenu();
    },
    closeMenu() {
      this.$emit("close");
    },
    focusLost() {
      this.$emit("close");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.modal__wrapper {
  @apply fixed z-50 inset-0;
}

.modal__container {
  @apply bg-white p-4 w-full absolute bottom-0 inset-x-0 rounded-t-2xl;
  @apply md:w-fit md:bottom-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-b-2xl md:p-8;
}

.modal__backdrop {
  @apply absolute w-screen h-screen inset-0 bg-slate-800 bg-opacity-70 z-20;
}

/* animations: */

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all .3s ease;

}

.fade-up-enter-from,
.fade-up-leave-to {
  @apply opacity-0 translate-y-[20px];
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
