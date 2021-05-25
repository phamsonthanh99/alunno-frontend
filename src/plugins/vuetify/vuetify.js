import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import '@/sass/overrides.sass';
import '@/assets/css/materialdesignicons.min.css';
import './custom.scss';
import ja from 'vuetify/lib/locale/ja';
import en from 'vuetify/lib/locale/en';

Vue.use(Vuetify);

const theme = {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
};

export default new Vuetify({
    theme: {
        themes: {
            dark: theme,
            light: theme,
        },
    },
    lang: {
        locales: { ja, en },
        current: 'ja',
    },
});
