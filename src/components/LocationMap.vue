<template>
    <v-responsive id="location_map" class="custom-content-container">
        <div class="divider-bar mt-12"></div>
        <div class="text-container-1 text-type-black text-type-16 text-align-left">
            날씨도, 식순도 예측할 수 없는 -
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
                <v-col class="col-5">
                    <v-btn class="elevation-0 custom-button" block @click="isOpenSnackbar = true" color="primary"
                    >
                        캘린더 등록
                    </v-btn>
                </v-col>
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
                <v-col class="col-5">
                    <v-btn class="elevation-0 custom-button" block color="primary" href='http://kko.to/uepuFiT4o' target="_blank">
                        카카오맵 보기
                    </v-btn>
                </v-col>
            </v-row>
        </v-responsive>
    </v-responsive>
</template>

<script>
    const LONGITUDE = 37.5213937;
    const LATITUDE = 126.9838961;

    export default {
        name: "LocationMap",
        data: () => ({
            isOpenSnackbar: false,
            map: undefined,
        }),
        mounted() {
            this.createKakaoMap();
        },
        methods: {
            createKakaoMap() {
                this.createMap(LONGITUDE, LATITUDE);
                // eslint-disable-next-line no-undef
                const bounds = new kakao.maps.LatLngBounds();
                const markerOfWeddingLocation = this.createMarker(bounds, 37.5213786,126.9838787, 'WED');
                const markerOfStation = this.createMarker(bounds, 37.5225786,126.9745787);

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
        margin-bottom: 24px;
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
