<template>
    <div id="index">
        <Intro></Intro>
        <LocationMap></LocationMap>
        <Notice></Notice>
        <Contact></Contact>
        <Story></Story>
        <Share></Share>
<!--        <LinkInfos></LinkInfos>-->
        <Comments></Comments>

    </div>
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
