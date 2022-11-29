/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**.vue'],
  theme: {
    extend: {
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
      },
      backgroundImage: {
        'icon-normal': 'url("@/assets/icons/normal.svg")',
        'icon-fire': 'url("@/assets/icons/fire.svg")',
        'icon-water': 'url("@/assets/icons/water.svg")',
        'icon-electric': 'url("@/assets/icons/electric.svg")',
        'icon-grass': 'url("@/assets/icons/grass.svg")',
        'icon-ice': 'url("@/assets/icons/ice.svg")',
        'icon-fighting': 'url("@/assets/icons/fighting.svg")',
        'icon-poison': 'url("@/assets/icons/poison.svg")',
        'icon-ground': 'url("@/assets/icons/ground.svg")',
        'icon-flying': 'url("@/assets/icons/flying.svg")',
        'icon-psychic': 'url("@/assets/icons/psychic.svg")',
        'icon-bug': 'url("@/assets/icons/bug.svg")',
        'icon-rock': 'url("@/assets/icons/rock.svg")',
        'icon-ghost': 'url("@/assets/icons/ghost.svg")',
        'icon-dragon': 'url("@/assets/icons/dragon.svg")',
        'icon-dark': 'url("@/assets/icons/dark.svg")',
        'icon-steel': 'url("@/assets/icons/steel.svg")',
        'icon-fairy': 'url("@/assets/icons/fairy.svg")',
      }
    },
  },
  plugins: [],
}
