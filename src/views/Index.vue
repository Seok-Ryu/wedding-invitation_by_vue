<template>
    <v-container id="index" max-width="960" class="pa-0">
        <Intro></Intro>
        <LocationMap></LocationMap>
        <Notice></Notice>
        <Contact></Contact>
        <Story></Story>
        <Share></Share>
        <Gallery></Gallery>
        <Comments></Comments>
        <LinkInfos></LinkInfos>
    </v-container>
</template>

<script>
    import LinkInfos from '../components/LinkInfos';
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
            LinkInfos,
            LocationMap,
            Comments
        }
    }
</script>

<style scoped>

</style>
