<template>
    <v-responsive id="intro" class="custom-content-container">
        <div class="d-flex flex-row-reverse ma-4">
            <v-btn
                    color="primary"
                    icon
                    outlined
                    @click="isSettingDialog = true"
            >
                <v-icon>
                    mdi-cog-outline
                </v-icon>
            </v-btn>
        </div>
        <v-responsive class="description-container">
            <div class="title-container text-type-black text-type-16 line-height-24 text-align-center">
                {{ $t('view.intro.header') }}
            </div>
            <div class="text-type-olive text-type-28 text-align-center">
                {{ $t('view.intro.GloomAndBride') }}
            </div>
        </v-responsive>
        <v-img :src="getImageSrc()" :lazy-src="getThumbnailSrc()" class=""></v-img>
        <!-- Setting dialog -->
        <v-dialog
                v-model="isSettingDialog"
                min-width="312"
                max-width="600"
        >
            <v-card>
                <v-card-title class="text-h5">
                    {{ $t('view.intro.Settings') }}
                </v-card-title>
                <v-card-text v-if="!isMobile()">
                    <div class="d-flex justify-space-around mt-4">
                        <div>
                            <v-btn-toggle
                                    v-model="theme"
                                    mandatory
                            >
                                <v-btn>
                                    <v-icon
                                            left
                                    >
                                        mdi-weather-night
                                    </v-icon>
                                    Dark
                                </v-btn>
                                <v-btn >
                                    <v-icon
                                            left
                                    >
                                        mdi-weather-sunny
                                    </v-icon>
                                    Light
                                </v-btn>
                            </v-btn-toggle>
                        </div>
                        <div>
                            <v-btn-toggle
                                    v-model="language"
                                    mandatory
                            >
                                <v-btn>
                                    <v-icon
                                            left
                                    >
                                        mdi-alphabetical-variant
                                    </v-icon>
                                    English
                                </v-btn>
                                <v-btn >
                                    <v-icon
                                            left
                                    >
                                        mdi-syllabary-hangul
                                    </v-icon>
                                    한국어
                                </v-btn>
                            </v-btn-toggle>
                        </div>
                    </div>
                </v-card-text>
                <v-card-text v-if="isMobile()">
                    <div class="mt-4">
                        <div>
                            <v-btn-toggle
                                    v-model="theme"
                                    mandatory
                            >
                                <v-btn>
                                    <v-icon
                                            left
                                    >
                                        mdi-weather-night
                                    </v-icon>
                                    Dark
                                </v-btn>
                                <v-btn >
                                    <v-icon
                                            left
                                    >
                                        mdi-weather-sunny
                                    </v-icon>
                                    Light
                                </v-btn>
                            </v-btn-toggle>
                        </div>
                        <v-spacer class="mt-2"></v-spacer>
                        <div>
                            <v-btn-toggle
                                    v-model="language"
                                    mandatory
                            >
                                <v-btn>
                                    <v-icon
                                            left
                                    >
                                        mdi-alphabetical-variant
                                    </v-icon>
                                    English
                                </v-btn>
                                <v-btn >
                                    <v-icon
                                            left
                                    >
                                        mdi-syllabary-hangul
                                    </v-icon>
                                    한국어
                                </v-btn>
                            </v-btn-toggle>
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            text
                            @click="isSettingDialog = false"
                    >
                        {{ $t('view.intro.cancel') }}
                    </v-btn>

                    <v-btn
                            color="primary"
                            text
                            v-on:click="changeSettings"
                    >
                        {{ $t('view.intro.ok') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-responsive>
</template>

<script>
    import { isDarkTheme, getLocale, setLocale, setTheme, isMobile } from '@/utils';

    const convertThemeToNumber = (isDark) => {
        // console.log(`isDark ${isDark}`);
        return isDark ? 0 : 1;
    }

    const convertLocaleToNumber = (locale) => {
        // console.log(`locale ${locale}`);
        return locale !== 'ko' ? 0 : 1;
    }

    export default {
        name: "Intro",
        data: () => ({
            isSettingDialog: false,
            switch1: true,
            theme: convertThemeToNumber(isDarkTheme()),
            language: convertLocaleToNumber(getLocale()),
        }),
        methods: {
            isMobile: isMobile,
            changeSettings() {
                let locale;

                switch (this.language) {
                    case 0:
                        locale = 'en';
                        break;
                    case 1:
                        locale = 'ko';
                        break;
                    default:
                        locale = 'en';
                }

                let darkTheme;
                switch (this.theme) {
                    case 0:
                        darkTheme = true;
                        break;
                    case 1:
                        darkTheme = false;
                        break;
                    default:
                        darkTheme = false;
                }

                setLocale(this, locale)
                setTheme(darkTheme)
                this.$vuetify.theme.dark = darkTheme;

                this.isSettingDialog = false;
            },
            getImageSrc() {
                const lightImage = 'https://raw.githubusercontent.com/Seok-Ryu/by_vue/master/public/images/day_intro.png';//'images/day_intro.png';
                const darkImage = 'https://raw.githubusercontent.com/Seok-Ryu/by_vue/master/public/images/gallery/p9.jpg';//'images/gallery/p9.jpg';

                return isDarkTheme() ? darkImage: lightImage;
            },
            getThumbnailSrc() {
                const lightImage = 'https://raw.githubusercontent.com/Seok-Ryu/by_vue/master/public/images/day_intro_min.jpg';
                const darkImage = 'https://raw.githubusercontent.com/Seok-Ryu/by_vue/master/public/images/gallery/p9.jpg';

                return isDarkTheme() ? darkImage: lightImage;
            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-content-container {
        padding: 0 !important;
        margin: 0 !important;
    }

    .description-container {
        /*height: 132px;*/
    }

    .title-container {
        /*margin-top: 48px;*/
    }
</style>
