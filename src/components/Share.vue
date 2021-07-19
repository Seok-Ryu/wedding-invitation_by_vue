<template>
    <v-container id="share" class="custom-content-container">
<!--        <v-img src="images/share.png"></v-img>-->
        <div class="divider-bar"></div>
        <div class="title-container text-type-olive text-type-24">
            공유하기
        </div>
        <v-responsive class="d-flex button-container">
            <v-row class="" justify="space-between" cols="12">
                <v-col class="col-5">
                    <v-btn class="elevation-0 custom-button" block @click="isOpenSnackbar = true">
                        <v-icon left>
                            mdi-phone-in-talk-outline
                        </v-icon>
                        카카오톡
                    </v-btn>
                </v-col>
                <v-col class="col-5">
                    <v-btn class="elevation-0 custom-button" block v-on:click="copyURL">
                        <v-icon left>
                            mdi-content-copy
                        </v-icon>
                        URL 복사
                    </v-btn>
                </v-col>
            </v-row>
        </v-responsive>
        <v-snackbar
                v-model="isOpenSnackbar"
                color="warning"
                :timeout="2000"
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
    </v-container>
</template>

<script>
    export default {
        name: "Share",
        data: () => ({
            isOpenSnackbar: false,
        }),
        methods: {
            copyURL() {
                if (!document.queryCommandSupported("copy")) {
                    return console.log('복사하기가 지원되지 않는 브라우저');
                }

                const inputElement = document.createElement("input");
                inputElement.value = 'https://ryuliah.netlify.app/#/'

                document.body.appendChild(inputElement);

                inputElement.select();
                document.execCommand("copy");
                this.isOpenSnackbar = true
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
