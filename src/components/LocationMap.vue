<template>
    <v-responsive id="location_map" class="custom-content-container">
        <div class="divider-bar"></div>
        <div class="text-container-1 text-type-black text-type-16 text-align-left">
            날씨도, 식순도, 애드리브도 예측할 수 없는 -
        </div>
        <div class="text-type-olive text-type-20">
            21년 9월 11일 오후 3시 30분
        </div>
        <div class="text-type-olive text-type-20">
            용산가족공원 버드나무 아래
        </div>
        <div class="map-container" ref="mapContainer">
        </div>
        <v-responsive class="d-flex button-container">
            <v-row class="" justify="space-between" cols="12">
                <v-col class="col-6">
                    <v-btn
                            class="elevation-0 custom-button"
                            block
                            :large="true"
                            color="primary"
                            v-if="isInitializeGoogle"
                            v-on:click="onClickCalendarEvent"
                    >
                        캘린더 등록
                    </v-btn>
                </v-col>
                <v-col class="col-6">
                    <v-btn
                            class="elevation-0 custom-button"
                            block color="primary"
                            :large="true"
                            href='http://kko.to/uepuFiT4o'
                            target="_blank"
                    >
                        카카오맵 보기
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
    const LONGITUDE = 37.5213937;
    const LATITUDE = 126.9838961;

    export default {
        name: "LocationMap",
        data: () => ({
            isOpenSnackbar: false,
            snackbarColor: '',
            snackbarText: '',
            map: undefined,
            isInitializeGoogle: false,
            isAuthSignedIn: false,
        }),
        mounted() {
            this.createKakaoMap();
            // eslint-disable-next-line no-undef
            gapi.load('client:auth2', this.initGoogleCalendarAPI);
        },
        methods: {
            createKakaoMap() {
                this.createMap(LONGITUDE, LATITUDE);
                // eslint-disable-next-line no-undef
                const bounds = new kakao.maps.LatLngBounds();
                const markerOfWeddingLocation = this.createMarker(bounds, 37.5213786,126.9838787, 'WED');
                const markerOfStation = this.createMarker(bounds, 37.5221786,126.9758787);

                markerOfWeddingLocation.setMap(this.map);
                markerOfStation.setMap(this.map)
                this.map.setBounds(bounds);

                // eslint-disable-next-line no-undef
                // const zoomControl = new kakao.maps.ZoomControl();
                // eslint-disable-next-line no-undef
                // this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
            },
            createMap(longitude, latitude) {
                const options = {
                    // eslint-disable-next-line no-undef
                    center: new kakao.maps.LatLng(longitude, latitude),
                    level: 5
                };

                // eslint-disable-next-line no-undef
                this.map = new kakao.maps.Map(this.$refs.mapContainer, options);
                // note: zoom disable
                // map.setZoomable(false);
            },
            createMarker(bounds, longitude, latitude, type) {
                // eslint-disable-next-line no-undef
                const position  = new kakao.maps.LatLng(longitude, latitude);
                bounds.extend(position);

                let markerImage;

                if (type === 'WED') {
                    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'; // 마커이미지의 주소
                    // eslint-disable-next-line no-undef
                    const imageSize = new kakao.maps.Size(24, 35); // 마커이미지의 크기
                    // const imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                    // const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                    // eslint-disable-next-line no-undef
                    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                }

                // eslint-disable-next-line no-undef
                const marker = new kakao.maps.Marker({
                    image: markerImage,
                    position,
                    map: this.map,
                });

                return marker;
            },
            initGoogleCalendarAPI() {
                const CLIENT_ID = '215390870050-722lfan2ekh51le7rsch65dnum8onjm8.apps.googleusercontent.com';
                const API_KEY = 'AIzaSyDyYUTFYEpqD4c6Okb-qDE42shcSup0POQ';

                // Array of API discovery doc URLs for APIs used by the quickstart
                const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

                // Authorization scopes required by the API; multiple scopes can be
                // included, separated by spaces.
                const SCOPES = "https://www.googleapis.com/auth/calendar";
                // eslint-disable-next-line no-undef
                gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES
                }).then(() => {
                    this.isInitializeGoogle = true;

                    // eslint-disable-next-line no-undef
                    gapi.auth2.getAuthInstance().isSignedIn.listen(this.setAuthSignedIn);

                    // eslint-disable-next-line no-undef
                    this.setAuthSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
                }, (error) => {
                    this.isInitializeGoogle = false;

                    console.error(`google api init fail.`, error);
                    // console.error(JSON.stringify(error, null, 2));
                });
            },
            isSignined() {
                // return false;
                // eslint-disable-next-line no-undef
                return gapi.auth2.getAuthInstance().isSignedIn.get();
            },
            setAuthSignedIn (isSignedIn) {
                this.isAuthSignedIn = isSignedIn;
            },
            onClickCalendarEvent() {
                // eslint-disable-next-line no-undef
                gtag('event', 'add_calendar');
                if (this.isSignined()) {
                    this.addNewEvent();
                } else {
                    this.authSignin();
                }
            },
            addNewEvent () {
                const event = {
                    summary: '류석 + 오다영 결혼식',
                    location: '용산가족공원, 대한민국 서울특별시 용산구 용산동6가 서빙고로 185',
                    description: '옷차림은 편하게, 마음은 가볍게, 10분일찍 오시면 좋아요',
                    start: {
                        'dateTime': '2021-09-11T15:30:00+09:00',
                        'timeZone': 'Asia/Seoul'
                    },
                    end: {
                        'dateTime': '2021-09-11T17:00:00+09:00',
                        'timeZone': 'Asia/Seoul'
                    },
                    reminders: {
                        'useDefault': false,
                        'overrides': [
                            {'method': 'popup', 'minutes': 60}, // 1 hour
                            {'method': 'popup', 'minutes': 1440}, // 1 day
                        ]
                    }
                };
                // eslint-disable-next-line no-undef
                const request = gapi.client.calendar.events.insert({
                    calendarId: 'primary',
                    resource: event
                });

                request.execute(this.eventCallback)
            },
            async authSignin() {
                // eslint-disable-next-line no-undef
                await gapi.auth2.getAuthInstance().signIn();

                if(this.isSignined()) {
                    this.addNewEvent();
                } else {
                    this.snackbarText =  '구글 인증에 실패 했어요 :(';
                    this.snackbarColor = 'warning';
                }

                this.isOpenSnackbar = true;
            },
            eventCallback(event) {
                console.log('Event: ', event);

                if (!event.htmlLink) {
                    this.snackbarText =  '이벤트가 등록에 실패했어요 :)';
                    this.snackbarColor = 'error';
                    this.isOpenSnackbar = true;

                    console.error('Event created fail: ' + event.htmlLink);
                    return;
                }

                this.snackbarText =  '구글 캘린더에 이벤트가 등록되었어요 :)';
                this.snackbarColor = 'primary';
                this.isOpenSnackbar = true;

                console.log('Event created: ' + event.htmlLink);
            },
            handleSignoutClick() {
                // eslint-disable-next-line no-undef
                gapi.auth2.getAuthInstance().signOut();
            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-content-container {
        background: none;
    }

    .text-container-1 {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .button-container {
        /*margin-bottom: 24px;*/
    }

    .map-container {
        margin-top: 32px;
        margin-bottom: 16px;

        min-height: 199px;
        min-width: 311px;
        /*max-height: 900px;*/
        /*max-width: 1500px;*/
        /* 360 기준*/
        /*width: 311px;*/
        /*height: 199px;*/
        /* 720 기준 */
        /*width: 656px;*/
        height: 398px;

        @media #{map-get($display-breakpoints, 'xs-only')} {
            height: 199px;
        }
    }


</style>
