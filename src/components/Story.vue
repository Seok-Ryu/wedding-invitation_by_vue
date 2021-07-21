<template>
    <v-responsive id="story" class="custom-content-container">
<!--        <v-img src="images/story.png"></v-img>-->
        <div class="divider-bar"></div>
        <div class="title-container text-type-olive text-type-24">
            우리의 이야기
        </div>
        <div class="text-type-black text-type-16 mb-8">
            <div>
                석류는 과거의 기억을 소중하게 여깁니다.
            </div>
            <div>
                함께 했던 사람들과 그들과 웃었던 순간들을 소중하게 생각하고, 그 때로 돌아갈 수 없음에 슬퍼했죠.
            </div>
            <div>
                <span>하지만 달리아를 만나고 </span>
                <span class="text-type-olive">석류는 달리아를 만나기 이전으로는 돌아가지 않겠다고 다짐했습니다.</span>
            </div>
        </div>
        <div class="text-type-black text-type-16">
            <div>
                달리아는 더 나은 세상을 만들고 싶어 합니다.
            </div>
            <div>
                하지만 꿈은 크고, 방법은 찾지 못해 어려워했죠.
            </div>
            <div>
                석류는 내 주변 사람을 행복하게 만들고, 그 사람이 그 주변 사람을 행복하게 만드는 꿈을 가졌다고 말했습니다.
            </div>
            <div>
                <span class="text-type-olive">달리아는 그 꿈이 더 나은 세상을 만드는 답이라고 생각했습니다.</span>
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
                더 많은 이야기 보기
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
