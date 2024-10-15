import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

const SusThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      '50': '#f3faf3',
      '100': '#e3f5e3',
      '200': '#c8eac9',
      '300': '#9dd89f',
      '400': '#6abe6e',
      '500': '#45a249',
      '600': '#348538',
      '700': '#2c692f',
      '800': '#275429',
      '900': '#224525',
      '950': '#0e2511',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.700}',
          inverseColor: '#ffffff',
          hoverColor: '{primary.800}',
          activeColor: '{primary.800}',
        },
        highlight: {
          background: '{primary.700}',
          focusBackground: '{primary.800}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: SusThemePreset,
    options: {
      darkModeSelector: '.fake-dark-selector',
    },
  },
})

app.use(router)

app.mount('#app')
