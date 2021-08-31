<template>
    <v-responsive id="story" class="custom-content-container">
<!--        <v-img src="images/story.png"></v-img>-->
        <div class="divider-bar"></div>
        <div class="title-container text-type-olive text-type-24">
            {{ $t('view.story.title') }}
        </div>
        <div class="text-type-black text-type-16 mb-8">
            <div>
                {{ $t('view.story.aboutHim_1') }}
            </div>
            <div>
                {{ $t('view.story.aboutHim_2') }}
            </div>
            <div>
                <span>{{ $t('view.story.aboutHim_3') }} </span>
                <span class="text-type-olive">{{ $t('view.story.aboutHim_4') }}</span>
            </div>
        </div>
        <div class="text-type-black text-type-16">
            <div>
                {{ $t('view.story.aboutHer_1') }}
            </div>
            <div>
                {{ $t('view.story.aboutHer_2') }}
            </div>
            <div>
                {{ $t('view.story.aboutHer_3') }}
            </div>
            <div>
                <span class="text-type-olive">{{ $t('view.story.aboutHer_4') }}</span>
            </div>
        </div>
        <div class="mt-8">
            <v-btn
                    class="elevation-0 custom-button"
                    block
                    :large="true"
                    color="primary"
                    v-on:click="linkTo"
            >
                {{ $t('view.story.moreStory') }}
            </v-btn>
        </div>
        <v-snackbar
                :top="true"
                v-model="isOpenSnackbar"
                :timeout="1500"
                color="warning"
        >
            아직 미구현 ㅠ
            <template v-slot:action="{ attrs }">
                <v-btn
                        color="white"
                        text
                        v-bind="attrs"
                        @click="isOpenSnackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-responsive>
</template>

<script>
    export default {
        name: "Story",
        data: () => ({
            isOpenSnackbar: false,
        }),
        methods: {
            linkTo() {
                // eslint-disable-next-line no-undef
                gtag('event', 'more_story');
                window.open('https://pastoral-airmail-dda.notion.site/48682e04f2f74fb58fb267da077ffe32', '_self')
            }
        }
    }
</script>

<style scoped>
    .custom-content-container {
        background: none;
    }

    .title-container {
        margin-top: 8px;
        margin-bottom: 48px;
    }
</style>
