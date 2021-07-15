<template>
    <v-container id="index" max-width="960" class="pa-0">
        <Intro></Intro>
        <LocationMap></LocationMap>
        <Notice></Notice>
        <Contact></Contact>
        <Story></Story>
        <Share></Share>
<!--        <LinkInfos></LinkInfos>-->
        <Comments></Comments>

    </v-container>
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

    export default {
        name: "Index",
        components: {
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
