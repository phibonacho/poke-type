<template>
  <section class="section__wrapper " :aria-labelledby="sectionId">
    <h3 :id="sectionId" class="section__title">{{title}}</h3>
    <ul class="section__list">
      <li v-bind:key="index" v-for="({name, id}, index) in items" class="section__list__item">
        <t-icon :name="id" :label="name" small/>
      </li>
    </ul>
  </section>
</template>

<script>
import TIcon from "@/components/TIcon";

export default {
  name: 'detail-section',
  components: {
    TIcon
  },

  props: {
    items: Array,
    title: String
  },
  computed: {
    sectionId() {
      return this.title.replace(' ', '-') + '__section'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section__wrapper {
  @apply mt-4 w-full;
}

.section__title {
  @apply mb-2 text-slate-800 uppercase;
}

.section__list {
  @apply grid grid-cols-2 gap-4 md:grid-cols-3;
}

.section__list__item {
  @apply rounded-md overflow-clip;
}

.item__label {
  @apply ml-2;
}

</style>
