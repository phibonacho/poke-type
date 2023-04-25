const colors = require('tailwindcss/colors')

module.exports = {
    content: ["src/**.vue", "src/components/*.vue"],
    safelist: [
        {
            pattern: /border-.+/
        },
    ],
    theme: {
        extend: {
            colors: {
                'normal': {
                    DEFAULT: '#A8A77A',
                    dark: colors.stone["600"]
                },
                'fire': {
                    DEFAULT: '#EE8130',
                    dark: colors.red["700"]
                },
                'water': {
                    DEFAULT: '#6390F0',
                    dark: colors.blue["700"]
                },
                electric: {
                    DEFAULT: '#F7D02C',
                    dark: colors.amber["500"]
                },
                'grass': {
                    DEFAULT: '#7AC74C',
                    dark: colors.lime["700"]
                },
                'ice': {
                    DEFAULT: '#96D9D6',
                    dark: colors.cyan["600"]
                },
                'fighting': {
                    DEFAULT: '#C22E28',
                    dark: colors.orange["700"]
                },
                'poison': {
                    DEFAULT: '#A33EA1',
                    dark: colors.pink["950"]
                },
                'ground': {
                    DEFAULT: '#E2BF65',
                    dark: colors.yellow["700"]
                },
                'flying': {
                    DEFAULT: '#A98FF3',
                    dark: colors.indigo["700"]
                },
                'psychic': {
                    DEFAULT: '#F95587',
                    dark: colors.pink["800"]
                },
                'bug': {
                    DEFAULT: '#A6B91A',
                    dark: colors.green["800"]
                },
                'rock': {
                    DEFAULT: '#B6A136',
                    dark: colors.yellow["800"]
                },
                'ghost': {
                    DEFAULT: '#735797',
                    dark: colors.purple["900"]
                },
                'dragon': {
                    DEFAULT: '#6F35FC',
                    dark: colors.violet["950"]
                },
                'dark': {
                    DEFAULT: '#705746',
                    dark: colors.amber["950"]
                },
                'steel': {
                    DEFAULT: '#B7B7CE',
                    dark: colors.slate["700"]
                },
                'fairy': {
                    DEFAULT: '#D685AD',
                    dark: colors.pink["700"]
                }
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
