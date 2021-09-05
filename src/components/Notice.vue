<template>
    <v-responsive id="notice" class="custom-content-container">
<!--        <v-img src="images/notice.png"></v-img>-->
        <div class="divider-bar"></div>
        <div class="title-container text-type-olive text-type-24">
            {{ $t('view.notice.notice') }}
        </div>
        <div class="text-type-black text-type-16">
            <div class="text-type-olive">
                * {{ $t('view.notice.noticeText_0') }} *
            </div>
            <div>
                {{ $t('view.notice.noticeText_1') }}
            </div>
            <div>
                {{ $t('view.notice.noticeText_2') }}
            </div>
            <div>
                {{ $t('view.notice.noticeText_3') }}
            </div>
        </div>
        <div class="subtext-container text-type-black text-type-16-500">
            {{ $t('view.notice.byCar') }}
        </div>
        <div class="text-type-black text-type-16">
            <div>
                <span class="text-type-olive">1 /  </span>
                <span>{{ $t('view.notice.byCarText_1')}}</span>
            </div>
            <div>
                <span class="text-type-olive">2 /  </span>
                <span>{{ $t('view.notice.byCarText_2')}}</span>
            </div>
            <div>
                <span class="text-type-olive">3 /  </span>
                <span>{{ $t('view.notice.byCarText_3')}}</span>
            </div>
        </div>
        <div class="subtext-container text-type-black text-type-16-500">
            {{ $t('view.notice.byPublic') }}
        </div>
        <div class="text-type-black text-type-16">
            <div>
                <span class="text-type-olive">1 /  </span>
                <span>{{ $t('view.notice.byPublicText_1') }}</span>
            </div>
            <div>
                <span class="text-type-olive">2 /  </span>
                <span>{{ $t('view.notice.byPublicText_2') }}</span>
            </div>
        </div>
        <div class="subtext-container text-type-black text-type-16-500">
            {{ $t('view.notice.byShuttle') }}
        </div>
        <div class="text-type-black text-type-16">
            <div>
                <span class="text-type-olive">{{ $t('view.notice.byShuttleTime_1') }} </span>
                <span class="text-type-12"> {{ $t('view.notice.byShuttleDuration_1') }}</span>
            </div>
            <div>
                {{ $t('view.notice.byShuttleRoute_1') }}
            </div>
            <div>
                <span class="text-type-olive">{{ $t('view.notice.byShuttleTime_2') }} </span>
                <span class="text-type-12"> {{ $t('view.notice.byShuttleDuration_2') }}</span>
            </div>
            <div>
                {{ $t('view.notice.byShuttleRoute_2') }}
            </div>
        </div>
        <div class="subtext-container text-type-black text-type-16-500">
            {{ $t('view.notice.dining') }}
        </div>
        <div class="text-type-black text-type-16">
            <div>
                {{ $t('view.notice.diningHowUse') }}
            </div>
            <div>
                <span>{{ $t('view.notice.diningGiftText_1') }} </span>
                <span class="text-type-olive">{{ $t('view.notice.diningGiftText_2') }}</span>
                <span>{{ $t('view.notice.diningGiftText_3') }}</span>
            </div>
            <div>
                <span>{{ $t('view.notice.diningText_1') }} </span>
                <span class="text-type-olive">{{ $t('view.notice.diningText_2') }}</span>
                <span>{{ $t('view.notice.diningText_3') }}</span>
            </div>
        </div>
        <div class="location-info" v-if="false">
            <div class="location-sub-area-1 d-flex mb-2 text-type-black text-type-16">
                <div class="text-type-16-500">
                    {{ $t('view.notice.restaurant') }}
                </div>
                <v-btn
                        color="var(--v-primary-base)"
                        text
                        href='http://kko.to/Ic3IlH0fp' target="_blank"
                >
                    <v-icon left>
                        mdi-map-marker-circle
                    </v-icon>
                    {{ $t('view.notice.onTheMap') }}
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
                    {{ $t('view.notice.restaurantInfo') }}
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
                return this.$t('view.notice.restaurantAddress');
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
