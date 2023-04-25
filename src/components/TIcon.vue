<template>
  <div class="tile" :class="{[name]: name, 'tile--small': small}">
    <div role="presentation" class="decoration"/>
    <p class="label">{{ label }}</p>
  </div>
</template>

<script>

export default {
  name: 'Tile',
  props: {
    label: String,
    name: String,
    small: Boolean
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tile {
  @apply relative pl-4 pr-8 py-2 bg-gradient-to-br w-full overflow-clip flex flex-col-reverse;
}

.decoration {
  @apply absolute -inset-y-2 md:-inset-y-4 -right-2 md:-right-8 aspect-square bg-contain bg-center bg-no-repeat opacity-20;
}

.tile--small .decoration {
  @apply inset-y-3 right-3 opacity-100;
}

.label {
  @apply text-xl font-semibold text-white pt-4 md:pt-10 z-10 capitalize text-left;
}

.tile--small .label {
  @apply pt-1 font-normal;
}
.normal {
  @apply from-normal to-normal-dark;
}

.fire {
  @apply from-fire to-fire-dark;
}

.water {
  @apply from-water to-water-dark;
}

.electric {
  @apply from-electric to-electric-dark;
}

.grass {
  @apply from-grass to-grass-dark;
}

.ice {
  @apply from-ice to-ice-dark;
}

.fighting {
  @apply from-fighting to-fighting-dark;
}

.poison {
  @apply from-poison to-poison-dark;
}

.ground {
  @apply from-ground to-ground-dark;
}

.flying {
  @apply from-flying to-flying-dark;
}

.psychic {
  @apply from-psychic to-psychic-dark;
}

.bug {
  @apply from-bug to-bug-dark;
}

.rock {
  @apply from-rock to-rock-dark;
}

.ghost {
  @apply from-ghost to-ghost-dark;
}

.dragon {
  @apply from-dragon to-dragon-dark;
}

.dark {
  @apply from-dark to-dark-dark;
}

.steel {
  @apply from-steel to-steel-dark;
}

.fairy {
  @apply from-fairy to-fairy-dark;
}

.normal .decoration{
  @apply bg-icon-normal;
}

.fire .decoration {
  @apply bg-icon-fire;
}

.water .decoration {
  @apply bg-icon-water;
}

.electric .decoration {
  @apply bg-icon-electric;
}

.grass .decoration {
  @apply bg-icon-grass;
}

.ice .decoration {
  @apply bg-icon-ice;
}

.fighting .decoration {
  @apply bg-icon-fighting;
}

.poison .decoration {
  @apply bg-icon-poison;
}

.ground .decoration {
  @apply bg-icon-ground;
}

.flying .decoration {
  @apply bg-icon-flying;
}

.psychic .decoration {
  @apply bg-icon-psychic;
}

.bug .decoration {
  @apply bg-icon-bug;
}

.rock .decoration {
  @apply bg-icon-rock;
}

.ghost .decoration {
  @apply bg-icon-ghost;
}

.dragon .decoration {
  @apply bg-icon-dragon;
}

.dark .decoration {
  @apply bg-icon-dark;
}

.steel .decoration {
  @apply bg-icon-steel;
}

.fairy .decoration {
  @apply bg-icon-fairy;
}
</style>
