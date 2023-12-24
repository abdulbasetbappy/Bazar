/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify';

const lightTheme = {
  colors:{
    background: '#EFF0F5',
    surface:'',
    primary: '#F85606',
    secondary: '',
    error: '',
    warning: '',
    info: '',
    success: '#F5F5F5',
  }
}
const darkTheme = {
  colors:{
    background: '',
    surface:'',
    primary: '',
    secondary: '',
    error: '',
    warning: '',
    info: '',
    success: '',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
});