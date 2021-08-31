import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { ko, en } from '@/locales';

Vue.use(VueI18n);


const i18n = new VueI18n({
    locale: 'ko',
    messages: { ko, en },
});

// for hot reload - https://vue-loader.vuejs.org/guide/hot-reload.html#state-preservation-rules
if (module.hot) {
    module.hot.accept(['@/locales/ko', '@/locales/en'], () => {
        i18n.setLocaleMessage('ko', ko);
        i18n.setLocaleMessage('en', en);
    });
}


export default i18n;
