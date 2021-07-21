<template>
    <v-container id="intro" class="custom-content-container">
        <v-responsive class="description-container">
            <div class="title-container text-type-black text-type-12 line-height-24 text-align-center">
                이제는 말할 수  있다 -
            </div>
            <div class="text-type-olive text-type-24 text-align-center">
                석류 + 다영
            </div>
        </v-responsive>
        <v-img :src="getImageSrc()"></v-img>
    </v-container>
</template>

<script>
    import { isDarkTheme } from '@/utils';

    export default {
        name: "Intro",
        methods: {
            getImageSrc() {
                const lightImage = 'images/IMG_7650.png';
                const darkImage = 'images/IMG_7853.jpg';

                return isDarkTheme() ? darkImage: lightImage;
            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-content-container {
        /*background: aqua;*/
        padding: 0 !important;
    }

    .description-container {
        height: 116px;
    }

    .title-container {
        margin-top: 48px;
    }
</style>
