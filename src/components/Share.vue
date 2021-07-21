<template>
    <v-responsive id="share" class="custom-content-container">
<!--        <v-img src="images/share.png"></v-img>-->
        <div class="divider-bar"></div>
        <div class="title-container text-type-olive text-type-24">
            공유하기
        </div>
        <v-responsive class="d-flex button-container">
            <v-row class="" justify="space-between" cols="12">
                <v-col class="col-6">
                    <v-btn
                            class="elevation-0 custom-button"
                            block
                            :large="true"
                            color="primary"
                            @click="sendKakaoMessage" >
                        <v-icon left>
                            mdi-message-outline
                        </v-icon>
                        카카오톡
                    </v-btn>
                </v-col>
                <v-col class="col-6">
                    <v-btn
                            class="elevation-0 custom-button"
                            block
                            :large="true"
                            color="primary"
                            v-on:click="copyURL">
                        <v-icon left>
                            mdi-content-copy
                        </v-icon>
                        URL 복사
                    </v-btn>
                </v-col>
            </v-row>
        </v-responsive>
        <v-snackbar
                :top="true"
                v-model="isOpenSnackbar"
                :color="snackbarColor"
                :timeout="1500"
        >
            {{snackbarText}}
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
        name: "Share",
        data: () => ({
            isOpenSnackbar: false,
            snackbarText: '주소 복사 되었습니다 :)',
            snackbarColor: '',
        }),
        mounted() {
            this.kakaoInit();
        },
        methods: {
            kakaoInit() {
                // eslint-disable-next-line no-undef
                if(Kakao.isInitialized()) {
                    console.log('already init');
                    return true;
                }

                // eslint-disable-next-line no-undef
                console.log('before init', Kakao.isInitialized());
                // eslint-disable-next-line no-undef
                Kakao.init("194d203f9fed44b8d0edf6c4158b8863");
                // eslint-disable-next-line no-undef
                Kakao.isInitialized();
                // eslint-disable-next-line no-undef
                console.log('after init', Kakao.isInitialized());

                return true;
            },
            copyURL() {
                if (!document.queryCommandSupported("copy")) {
                    this.snackbarText = '복사하기가 지원되지 않는 브라우저에요 :(';
                    this.snackbarColor = 'warning'
                    this.isOpenSnackbar = true;

                    return;
                }

                const inputElement = document.createElement("input");
                inputElement.value = 'https://ryuliah.netlify.app/#/'

                document.body.appendChild(inputElement);

                inputElement.select();
                document.execCommand("copy");
                document.body.removeChild(inputElement);
                this.snackbarText = 'URL이 복사 되었습니다 :)';
                this.snackbarColor = 'primary'
                this.isOpenSnackbar = true;
            },
            sendKakaoMessage() {
                // eslint-disable-next-line no-undef
                Kakao.Link.sendDefault({
                    objectType: 'feed',
                    content: {
                        title: '류석+오다영 저희 결혼합니다.',
                        description: '2021년 9월 11일 오후 3시 30분, 용산가족공원 버드나무 아래',
                        imageUrl: 'https://ryuliah.netlify.app/images/IMG_7650.png',
                        link: {
                            mobileWebUrl: 'https://ryuliah.netlify.app/#/',
                        },
                    },
                    buttons: [
                        {
                            title: '한땀한땀 만든 청첩장 바로GO!',
                            link: {
                                mobileWebUrl: 'https://ryuliah.netlify.app/#/',
                            },
                        },
                    ]
                });
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
        margin-bottom: 32px;
    }
</style>
