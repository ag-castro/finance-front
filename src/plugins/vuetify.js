import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'
import colors from 'vuetify/es5/util/colors'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.teal.darken1,
        // secondary: colors.indigo.darken1,
        accent: colors.indigo.darken1,
        error: colors.pink.darken2,
        info: colors.blue,
        success: colors.teal.lighten1,
        warning: colors.purple.darken1

      }
    }
  },
  icons: {
    iconfont: 'md'
  }
})
