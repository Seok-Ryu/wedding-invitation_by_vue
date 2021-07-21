<template>
    <v-responsive id="notice" class="custom-content-container">
<!--        <v-img src="images/notice.png"></v-img>-->
        <div class="divider-bar"></div>
        <div class="title-container text-type-olive text-type-24">
            안내사항
        </div>
        <div class="text-type-black text-type-16">
            <div>
                공원이므로 옷은 편하게.
            </div>
            <div>
                아이들과 놀 준비, 댕댕이와 산책할 준비는 자유롭게!
            </div>
            <div>
                화환 반입은 어려워요.
            </div>
        </div>
        <div class="subtext-container text-type-black text-type-16-500">
            자차로 오신다면
        </div>
        <div class="text-type-black text-type-16">
            <div>
                <span class="text-type-olive">1 /  </span>
                <span>주차는 국립중앙박물관 주차장에</span>
            </div>
            <div>
                <span class="text-type-olive">2 /  </span>
                <span>이촌역 2번 출구에서 셔틀버스를 타거나 10분 정도 걸어오세요.</span>
            </div>
            <div>
                <span class="text-type-olive">3 /  </span>
                <span>결혼식 접수대에서 주차비를 받습니다.</span>
            </div>
        </div>
        <div class="subtext-container text-type-black text-type-16-500">
            대중교통으로 오신다면
        </div>
        <div class="text-type-black text-type-16">
            <div>
                <span class="text-type-olive">1 /  </span>
                <span>이촌역 2번 출구로 나와주세요.</span>
            </div>
            <div>
                <span class="text-type-olive">2 /  </span>
                <span>이촌역 2번 출구에서 셔틀버스를 타거나 10분 정도 걸어오세요.</span>
            </div>
        </div>
        <div class="subtext-container text-type-black text-type-16-500">
            셔틀버스
        </div>
        <div class="text-type-black text-type-16">
            <div>
                <span class="text-type-olive">15:00 - 16:00 </span>
                <span class="text-type-12"> 10분 간격 순환</span>
            </div>
            <div>
                이촌역  2번 출구  ~ 용산가족공원
            </div>
            <div>
                <span class="text-type-olive">16:00 - 17:00 </span>
                <span class="text-type-12"> 20분 간격 순환</span>
            </div>
            <div>
                용산가족공원 ~ 기와
            </div>
        </div>
        <div class="subtext-container text-type-black text-type-16-500">
            답례 / 식사
        </div>
        <div class="text-type-black text-type-16">
            <div>
                접수대에서 교환권을 지급합니다.
            </div>
            <div>
                <span>- 퇴장시 접수대에서 </span>
                <span class="text-type-olive">답례품</span>
                <span>으로 교환</span>
            </div>
            <div>
                <span>- ‘기와’ 에서 </span>
                <span class="text-type-olive">식권</span>
                <span>으로 사용</span>
            </div>
        </div>
        <div class="location-info">
            <div class="location-sub-area-1 d-flex mb-2 text-type-black text-type-16">
                <div class="text-type-16-500">
                    피로연장 ‘기와'
                </div>
                <v-btn
                        color="var(--v-primary-base)"
                        text
                        href='http://kko.to/Ic3IlH0fp' target="_blank"
                >
                    <v-icon left>
                        mdi-map-marker-circle
                    </v-icon>
                    지도로 보기
                </v-btn>
                <!--<div class="d-flex" href='http://kko.to/uepuFiT4o' target="_blank">
                    <v-icon color="primary" class="pr-2">mdi-map-marker-circle</v-icon>
                    <span class="text-type-olive text-type-16"></span>
                </div>-->
            </div>
            <div class="text-type-black text-type-12">
                <div class="text-decoration-underline" style="cursor: pointer;"  v-on:click="copyAddress">
                   {{address}}
                </div>
                <div>
                    용산역 도보 5분 / 주차 무료
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
        </div>
    </v-responsive>
</template>

<script>
    import { isSupportedCopyCommand, doCopyCommand } from '@/utils';

    export default {
        name: "Notice",
        computed: {
            address () {
              return '서울시 용산구 한강로3가 40-946';
            }
        },
        data: () => ({
            isOpenSnackbar: false,
            snackbarText: '',
            snackbarColor: 'primary',
        }),
        methods: {
            copyAddress(event) {
                if (!isSupportedCopyCommand()) {
                    this.snackbarText = '복사하기가 지원되지 않는 브라우저에요 :(';
                    this.snackbarColor = 'warning'
                    this.isOpenSnackbar = true;

                    return;
                }

                doCopyCommand(event)

                this.snackbarText = '주소가 복사 되었습니다 :)';
                this.snackbarColor = 'primary'
                this.isOpenSnackbar = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-content-container {
        background: none;
    }

    .title-container {
        margin-top: 8px;
        margin-bottom: 48px;
    }

    .subtext-container {
        margin-top: 48px;
        margin-bottom: 16px;
    }

    .location-info {
        margin-top: 24px;
        border: 1.5px solid var(--v-primary-base);
        padding: 16px;
    }

    .location-sub-area-1 {
        justify-content: space-between;
    }
</style>
