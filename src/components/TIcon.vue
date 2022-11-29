<template>
  <span class="type-icon" :class="name" aria-hidden="true"></span>
</template>

<script>

export default {
  name: 't-icon',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .type-icon {
   @apply border-4 w-4 h-4 rounded-full bg-contain inline-block p-2;
 }

 .normal {
   @apply border-normal bg-normal bg-icon-normal;
 }

 .fire {
   @apply border-fire bg-fire bg-icon-fire;
 }

 .water {
   @apply border-water bg-water bg-icon-water;
 }

 .electric {
   @apply border-electric bg-electric bg-icon-electric;
 }

 .grass {
   @apply border-grass bg-grass bg-icon-grass;
 }

 .ice {
   @apply border-ice bg-ice bg-icon-ice;
 }

 .fighting {
   @apply border-fighting border-fighting bg-fighting bg-icon-fighting;
 }

 .poison {
   @apply border-poison bg-poison bg-icon-poison;
 }

 .ground {
   @apply border-ground bg-ground bg-icon-ground;
 }

 .flying {
   @apply border-flying bg-flying bg-icon-flying;
 }

 .psychic {
   @apply border-psychic bg-psychic bg-icon-psychic;
 }

 .bug {
   @apply border-bug bg-bug bg-icon-bug;
 }

 .rock {
   @apply border-rock bg-rock bg-icon-rock;
 }

 .ghost {
   @apply border-ghost bg-ghost bg-icon-ghost;
 }

 .dragon {
   @apply border-dragon bg-dragon bg-icon-dragon;
 }

 .dark {
   @apply border-dark bg-dark bg-icon-dark;
 }

 .steel {
   @apply border-steel bg-steel bg-icon-steel;
 }

 .fairy {
   @apply border-fairy bg-fairy bg-icon-fairy;
 }
</style>
