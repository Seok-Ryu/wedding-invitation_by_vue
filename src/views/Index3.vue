<template>
    <v-main id="index" max-width="720">
        <LocationMap></LocationMap>
        <Notice></Notice>
        <Gallery></Gallery>
        <Share></Share>
        <Comments></Comments>
    </v-main>
</template>

<script>
    // import LinkInfos from '../components/LinkInfos';
    import Comments from "@/components/Comments";
    import LocationMap from "@/components/LocationMap";
    import Notice from "@/components/Notice";
    import Share from "@/components/Share";
    import Gallery from "@/components/Gallery";

    export default {
        name: "Index",
        components: {
            Gallery,
            Share,
            Notice,
            // LinkInfos,
            LocationMap,
            Comments
        }
    }
</script>

<style scoped>
</style>

<style lang="scss">
    /*.custom-content-container {
        max-width: 720px;
        background: var(--v-secondary-base);
        padding-left: 32px;
        padding-right: 32px;
    }*/

    .divider-bar {
        margin-top: 48px;
        width: 24px;
        border-bottom: 3px solid var(--v-primary-base);
    }

    .text-type-olive {
        font-style: normal;
        letter-spacing: 0em;
        color: var(--v-primary-base);
    }

    .text-type-black {
        font-style: normal;
        letter-spacing: 0em;
        color: var(--v-secondary-base);
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
