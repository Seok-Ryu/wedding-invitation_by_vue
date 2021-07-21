<template>
    <v-responsive id="contact" class="custom-content-container">
<!--        <v-img src="images/contact_info.png"></v-img>-->
        <div class="groom-container">
            <div class="d-flex icon-container text-type-olive text-type-16">
                <div class="text-type-16-500">
                    신랑 류석
                </div>
                <div class="icon-area d-flex">
                    <v-btn
                            text
                            color="primary"
                            small
                            v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01097371233')"
                    >
                        <v-icon
                                size="18"
                        >
                            mdi-phone-in-talk-outline
                        </v-icon>
                    </v-btn>
                    <v-btn
                            color="primary"
                            text
                            small
                            v-on:click="linkTo($options.LINK_TYPE.KAKAO_TALK, 'http://qr.kakao.com/talk/geQ_Uj1WiGWinLXTpeX8CjC9lTY-')"
                    >
                        <v-icon
                                size="18"
                        >
                            mdi-message-outline
                        </v-icon>
                    </v-btn>
                    <v-btn
                            color="primary"
                            text
                            small
                            href='https://qr.kakaopay.com/281006011000003410616386'
                            target="_blank"
                            v-if="false"
                    >
                        Kakao-Pay
                    </v-btn>
                    <v-btn
                            color="primary"
                            text
                            small
                            v-on:click="linkTo($options.LINK_TYPE.TOSS, 'https://toss.im/_m/vXxikPiB')"
                    >
                        TOSS
                    </v-btn>
                </div>
            </div>
            <div class="text-type-black text-type-16">
                <div class="pt-5">
                    <span class="pr-4">류근복</span>
                    <span style="cursor: pointer;" class="font-weight-bold"
                          v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01029504069')"
                    >
                        010-2950-4069
                    </span>
                </div>
                <div class="">
                    <span class="pr-4">김미자</span>
                    <span style="cursor: pointer;" class="font-weight-bold"
                          v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01024844069')"
                    >
                        010-2484-4069
                    </span>
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
                            small
                            color="primary"
                            v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01043001867')"
                    >
                        <v-icon size="18">
                            mdi-phone-in-talk-outline
                        </v-icon>
                    </v-btn>
                    <v-btn
                            class="pr-2"
                            color="primary"
                            text
                            small
                            v-on:click="linkTo($options.LINK_TYPE.KAKAO_TALK, 'http://qr.kakao.com/talk/UVtGcjnLd4AatuFKwq6z0iPx0D4-')"
                    >
                        <v-icon size="18">
                            mdi-message-outline
                        </v-icon>
                    </v-btn>
                    <v-btn
                            class="pr-2"
                            color="primary"
                            text
                            small
                            href='https://qr.kakaopay.com/281006011000000817056775'
                            target="_blank"
                            v-if="false"
                    >
                        KAKAO-PAY
                    </v-btn>
                    <v-btn
                            class="pr-2"
                            color="primary"
                            text
                            small
                            v-on:click="linkTo($options.LINK_TYPE.TOSS, 'https://toss.im/_m/dK3amnzi')"
                    >
                        TOSS
                    </v-btn>
                </div>
            </div>
            <div class="text-type-black text-type-16">
                <div class="pt-5">
                    <span class="pr-4">오문경</span>
                    <span style="cursor: pointer;" class="font-weight-bold"
                          v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01028750246')"
                    >
                        010-2875-0246
                    </span>
                </div>
                <div class="name-container">
                    <span class="pr-4">윤선희</span>
                    <span style="cursor: pointer;" class="font-weight-bold"
                            v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01043230246')"
                    >
                        010-4323-0246
                    </span>
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
    </v-responsive>
</template>

<script>
    import { isMobile } from '@/utils';

    const LINK_TYPE = {
        CALL: 'CALL',
        KAKAO_TALK: 'KAKAO_TALK',
        TOSS: 'TOSS',
    }

    export default {
        LINK_TYPE,
        name: "Contact",
        data: () => ({
            isOpenSnackbar: false,
            snackbarText: '',
            snackbarColor: 'primary',
        }),
        methods: {
            copyAccountInfo(event) {
                if (!document.queryCommandSupported("copy")) {
                    this.snackbarText = '복사하기가 지원되지 않는 브라우저에요 :(';
                    this.snackbarColor = 'warning'
                    this.isOpenSnackbar = true;

                    return;
                }

                const inputElement = document.createElement("input");
                inputElement.value = event.target.innerText;

                document.body.appendChild(inputElement);

                inputElement.select();
                document.execCommand("copy");
                document.body.removeChild(inputElement);

                this.snackbarText = '계좌 번호가 복사 되었습니다 :)';
                this.snackbarColor = 'primary'
                this.isOpenSnackbar = true;
            },
            linkTo(type, target) {
                if (!isMobile()) {
                    this.snackbarText = '모바일에서만 지원됩니다 :(';
                    this.snackbarColor = 'warning'
                    this.isOpenSnackbar = true;

                    return;
                }

                switch (type) {
                    case LINK_TYPE.CALL:
                        break;
                    case LINK_TYPE.KAKAO_TALK:
                        break;
                    case LINK_TYPE.TOSS:
                        break;
                }
                // const route = this.$router.resolve({path: target});
                // let route = this.$router.resolve('/link/to/page'); // This also works.
                // window.open(route.href, '_blank');
                window.open(target, '_blank');

            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-text-button {
        /*font-size: 16px*/
        /*font-weight: 300;*/
    }
    .custom-content-container {
        /*margin-top: 48px;*/
        /*margin-bottom: 48px;*/
    }

    .groom-container {
        /*margin-top: 24px;*/
    }

    .bride-container {
        margin-top: 48px;
        /*margin-bottom: 24px;*/
    }

    .name-container {
        span {
            height: 36px;
        }
    }

    .icon-container {
        justify-content: space-between;
    }
</style>
