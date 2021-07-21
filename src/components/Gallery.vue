<template>
    <v-responsive id="gallery" class="custom-content-container ">
        <v-row>
            <v-col
                    v-for="(item, index) in items"
                    :key="index"
                    class="d-flex child-flex"
                    cols="4"
            >
                <v-img
                        :src="item.src"
                        :lazy-src="item.src"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        v-on:click="itemClick(index, item)"
                >
                    <template v-slot:placeholder>
                        <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                        >
                            <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
        <v-dialog
                v-model="dialogInfo.isVisibleDialog"
        >
            <GalleryPopup
                    :id="this.dialogInfo.targetItemId"
            >
            </GalleryPopup>
        </v-dialog>
    </v-responsive>
</template>

<script>
    import GalleryPopup from "@/components/GalleryPopup";

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
            items: initGalleryData(),
            dialogInfo: {
                isVisibleDialog: false,
                targetItemId: 0,
            }
        }),
        methods: {
            itemClick(index, item) {
                console.log(index, item);
                this.dialogInfo.isVisibleDialog = true;
                this.dialogInfo.targetItemId = index;
                // this.$router.push({name: 'GalleryDetail', params: { id: index }});
                // this.$router.push({name: 'Test', params: { id: index }});
            }
        },
        components: {
            GalleryPopup,
        }
    }
</script>

<style scoped>

</style>
