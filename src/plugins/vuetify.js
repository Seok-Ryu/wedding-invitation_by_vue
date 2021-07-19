import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#A7BB64',
                secondary: '#3B3C37',
                accent: '#8c9eff',
                error: '#b71c1c',
                // anchor: '#8c9eff',
            }
        }
    }
    /*breakpoint: {
        thresholds: {
            xs: 340,
            sm: 540,
            md: 800,
            lg: 1280,
        },
        scrollBarWidth: 24,
    },*/
});
