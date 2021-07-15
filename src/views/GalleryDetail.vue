<template>
    <div id="gallery" class="content-container pl-8 pr-8">
        <v-carousel
                v-model="model"
                hide-delimiter-background
                show-arrows-on-hover
        >
            <v-carousel-item
                    v-for="(item, index) in items"
                    :key="index"
                    :src="item.src"
            >
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    const GALLERY_FILE_LENGTH = 7;

    const initGalleryData = () => {
        const items = [];
        const imagePath = 'images/gallery'
        const imageExtension = 'jpg';

        for (let i = 1; i <= GALLERY_FILE_LENGTH; i++) {
            items.push({
                src: `${imagePath}/p${i}.${imageExtension}`
            })
        }

        return items;
    }

    export default {
        name: "Gallery",
        data: () => ({
            model: 0,
            items: initGalleryData(),
        }),
        methods: {
        }
    }
</script>

<style scoped>
    .content-container {
        background-color: #FFFEF5;
    }

</style>
