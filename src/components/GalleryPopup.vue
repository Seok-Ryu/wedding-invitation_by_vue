<template>
    <div id="gallery-popup" class="content-container">
<!--        <div> {{id}}</div>-->
<!--        <div> {{model}}</div>-->
        <v-carousel
                v-model="itemIndex"
                hide-delimiters
                class="carousel-container"
        >
            <!--<v-img
                    v-for="(item, index) in items"
                    :key="index"
                    :src="item.src"
                    :aspect-ratio="16/9"
                    class="carousel-item"
            ></v-img>-->
            <v-carousel-item
                    v-for="(item, index) in items"
                    :key="index"
                    :src="item.src"
                    :lazy-src="item.src"
                    :aspect-ratio="16/9"
                    contain
                    class="carousel-item"
            >
                <!--<v-img
                        :src="item.src"
                        :lazy-src="item.src"
                        class=""
                />-->
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    const GALLERY_FILE_LENGTH = 21;

    const initGalleryData = () => {
        const items = [];
        const imagePath = 'https://raw.githubusercontent.com/Seok-Ryu/by_vue/master/public/images/gallery';//'images/gallery'
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
        name: "GalleryPopup",
        props: {
            itemIndex: {
                type: Number,
                required: true
            },
        },
        mounted() {
          // console.log(this.dialogInfo.targetItemId)
            // this.model = this.dialogInfo.targetItemId;
        },
        data: () => ({
            // model: 0,
            // model: this.id,
            items: initGalleryData(),
        }),
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .content-container {
        background-color: var(--v-accent-base);
    }

    .carousel-container {
        /*height: 80%;*/
        /*min-height: 800px;*/
    }

    .carousel-item {
        /*msin-height: 800px;*/
        /*@media (max-width: 100px) {
            .content-container {
                min-height: 200px;
            }
            .v-carousel__item {
                min-height: 150px;
            }
        }*/
    }


</style>
