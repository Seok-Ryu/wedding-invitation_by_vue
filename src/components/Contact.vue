<template>
    <v-container id="contact" class="custom-content-container">
<!--        <v-img src="images/contact_info.png"></v-img>-->
        <div class="groom-container">
            <div class="d-flex icon-container text-type-olive text-type-16">
                <div class="text-type-16-500">
                    신랑 류석
                </div>
                <div class="icon-area d-flex">
                    <v-btn
                            class="pr-2"
                            text
                            color="primary"
                            href='tel:01097371233'
                    >
                        <v-icon left>
                            mdi-phone-in-talk-outline
                        </v-icon>
                    </v-btn>
                    <v-btn
                            class="pr-2"
                            color="primary"
                            text
                            href='http://qr.kakao.com/talk/geQ_Uj1WiGWinLXTpeX8CjC9lTY-'
                            target="_blank"
                    >
                        <v-icon left>
                            mdi-message-outline
                        </v-icon>
                    </v-btn>
                    <v-btn
                            class="pr-2"
                            color="primary"
                            text
                            href='https://qr.kakaopay.com/281006011000003410616386'
                            target="_blank"
                    >
                        KAKAO-PAY
                    </v-btn>
                    <v-btn
                            class="pr-2"
                            color="primary"
                            text
                            href='https://toss.im/_m/TWcYNcA3'
                            target="_blank"
                    >
                        TOSS
                    </v-btn>
                </div>
            </div>
            <div class="text-type-black text-type-16">
                <div class="pt-5">
                    <span class="pr-4">류근복</span>
                    <v-btn
                            class="pr-2"
                            text
                            color="secondary"
                            href='tel:01029504069'
                    >
                        010-2950-4069
                    </v-btn>
                </div>
                <div class="">
                    <span class="pr-4">김미자</span>
                    <v-btn
                            class="pr-2"
                            text
                            color="secondary"
                            href='tel:01024844069'
                    >
                        010-2484-4069
                    </v-btn>
                </div>
                <div class="">
                    <span class="text-decoration-underline" style="cursor: pointer;"  v-on:click="copyAccountInfo">
                        신한 110-180-416877
                    </span>
                    <span>&nbsp;(유석)</span>
                </div>
            </div>
        </div>
        <v-snackbar
                v-model="isOpenSnackbar"
                color="primary"
                :timeout="2000"
        >
            계좌 번호가 복사 되었습니다 :)
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
        <!-- 신부 영역-->
        <div class="bride-container">
            <div class="d-flex icon-container text-type-olive text-type-16">
                <div class="text-type-16-500">
                    신부 오다영
                </div>
                <div class="icon-area d-flex">
                    <v-btn
                            class="pr-2"
                            text
                            color="primary"
                            href='tel:01043001867'
                    >
                        <v-icon left>
                            mdi-phone-in-talk-outline
                        </v-icon>
                    </v-btn>
                    <v-btn
                            class="pr-2"
                            color="primary"
                            text
                            href='http://qr.kakao.com/talk/UVtGcjnLd4AatuFKwq6z0iPx0D4-'
                            target="_blank"
                    >
                        <v-icon left>
                            mdi-message-outline
                        </v-icon>
                    </v-btn>
                    <v-btn
                            class="pr-2"
                            color="primary"
                            text
                            href='https://qr.kakaopay.com/281006011000000817056775'
                            target="_blank"
                    >
                        KAKAO-PAY
                    </v-btn>
                    <v-btn
                            class="pr-2"
                            color="primary"
                            text
                            href='https://toss.im/_m/VmrctDP4'
                            target="_blank"
                    >
                        TOSS
                    </v-btn>
                </div>
            </div>
            <div class="text-type-black text-type-16">
                <div class="pt-5">
                    <span class="pr-4">오문경</span>
                    <v-btn
                            class="pr-2"
                            text
                            color="secondary"
                            href='tel:01028750246'
                    >
                        010-2875-0246
                    </v-btn>
                </div>
                <div class="">
                    <span class="pr-4">윤선희</span>
                    <v-btn
                            class="pr-2"
                            text
                            color="secondary"
                            href='tel:01043230246'
                    >
                        010-4323-0246
                    </v-btn>
                </div>
                <div class="">
                    <span class="text-decoration-underline" style="cursor: pointer;"  v-on:click="copyAccountInfo">
                        국민 061-21-0263-130
                    </span>
                    <span>&nbsp;(오문경)</span>
                </div>
                <div class="">
                    <span class="text-decoration-underline" style="cursor: pointer;"  v-on:click="copyAccountInfo">
                        카뱅 3333-04-0840375
                    </span>
                    <span>&nbsp;(오다영)</span>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "Contact",
        data: () => ({
            isOpenSnackbar: false,
        }),
        methods: {
            copyAccountInfo(event) {
                if (!document.queryCommandSupported("copy")) {
                    return console.log('복사하기가 지원되지 않는 브라우저');
                }

                const inputElement = document.createElement("input");
                inputElement.value = event.target.innerText;

                document.body.appendChild(inputElement);

                inputElement.select();
                document.execCommand("copy");
                this.isOpenSnackbar = true
            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-content-container {
    }

    .groom-container {
        margin-top: 48px;
    }

    .bride-container {
        margin-top: 48px;
        margin-bottom: 42px;
    }

    .icon-container {
        justify-content: space-between;
    }
</style>
