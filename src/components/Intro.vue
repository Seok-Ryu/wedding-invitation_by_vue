<template>
    <v-responsive id="intro" class="custom-content-container">
        <v-responsive class="description-container">
            <div class="title-container text-type-black text-type-16 line-height-24 text-align-center">
                이제는 말할 수  있다
            </div>
            <div class="text-type-olive text-type-28 text-align-center">
                석류 + 다영
            </div>
        </v-responsive>
        <v-img :src="getImageSrc()" :lazy-src="getThumbnailSrc()" class=""></v-img>
    </v-responsive>
</template>

<script>
    import { isDarkTheme } from '@/utils';

    export default {
        name: "Intro",
        methods: {
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
        height: 132px;
    }

    .title-container {
        margin-top: 48px;
    }
</style>
