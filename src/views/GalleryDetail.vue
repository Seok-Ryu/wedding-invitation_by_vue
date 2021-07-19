<template>
    <div id="gallery" class="content-container pl-8 pr-8">
<!--        <div> {{id}}</div>-->
<!--        <div> {{model}}</div>-->
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
    // initGalleryData();

    export default {
        name: "Gallery",
        props: {
          id: {
              type: Number,
              default: 0,
              required: true
          }
        },
        mounted() {
          console.log(this.id)
            this.model = this.id;
        },
        data: () => ({
            model: 0,
            // model: this.id,
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
