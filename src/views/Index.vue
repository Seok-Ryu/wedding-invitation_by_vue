<template>
    <v-main id="index" max-width="720">
        <Intro></Intro>
        <LocationMap></LocationMap>
        <Notice></Notice>
        <Contact></Contact>
        <Story></Story>
        <Gallery></Gallery>
        <Share></Share>
        <Comments></Comments>
<!--        <LinkInfos></LinkInfos>-->
    </v-main>
</template>

<script>
    // import LinkInfos from '../components/LinkInfos';
    import Comments from "@/components/Comments";
    import LocationMap from "@/components/LocationMap";
    import Intro from "@/components/Intro";
    import Notice from "@/components/Notice";
    import Contact from "@/components/Contact";
    import Story from "@/components/Story";
    import Share from "@/components/Share";
    import Gallery from "@/components/Gallery";

    export default {
        name: "Index",
        components: {
            Gallery,
            Share,
            Story,
            Contact,
            Notice,
            Intro,
            // LinkInfos,
            LocationMap,
            Comments
        }
    }
</script>

<style scoped>
</style>

<style lang="scss">
    .custom-content-container {
        max-width: 720px;
        background: #fffef5;
        /*background: aqua;*/
        padding-left: 32px;
        padding-right: 32px;
    }

    .divider-bar {
        margin-top: 48px;
        width: 24px;
        border-bottom: 3px solid #A7BB64;
    }

    .custom-button {
        color: #FFFEF5 !important;
        background-color: #A7BB64 !important;
        border-color: #A7BB64;
    }

    .text-type-olive {
        font-family: Noto Sans KR;
        font-style: normal;
        letter-spacing: 0em;
        color: #A7BB64;
    }

    .text-type-black {
        font-family: Noto Sans KR;
        font-style: normal;
        letter-spacing: 0em;
        color: #3B3C37;
    }

    .text-type-24 {
        font-size: 24px;
        font-weight: 400;
        line-height: 35px;
    }

    .text-type-16 {
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
    }

    .text-type-16-500 {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }

    .text-type-12 {
        font-size: 12px;
        font-weight: 300;
        line-height: 17px;
    }

    .text-align-center {
        text-align: center;
    }

    .line-height-17 {
        line-height: 17px;
    }

    .line-height-24 {
        line-height: 24px;
    }
</style>
