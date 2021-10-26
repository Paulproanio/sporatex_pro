import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',

        spore_1:'#D9BD9C',
        spore_2:'#D9CEC1',
        spore_3:'#BF8F65',
        spore_4:'#403328',
        spore_5:'#F2F2F2',
      },
    },
  },
});
