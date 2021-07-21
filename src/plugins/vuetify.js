import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { isDarkTheme } from '@/utils';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: isDarkTheme(),
        themes: {
            light: {
                primary: '#A7BB64', //olive
                secondary: '#3B3C37', //black
                accent: '#FFFEF5', //yellow
                // accent: '#FF0000', //yellow
            },
            dark: {
                primary: '#FFB74D', //olive
                secondary: '#ffffff', //black
                accent: '#263238', //yellow
            }
        },
        options: {
            // global css use option
            customProperties: true,
        },
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
