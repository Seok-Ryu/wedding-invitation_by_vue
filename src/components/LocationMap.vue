<template>
    <v-container id="location_map" class="custom-content-container">
        <div class="divider-bar"></div>
        <div class="text-container-1 text-type-black text-type-12 text-align-left">
            날씨도, 식순도, 신랑의 애드리브도 예측할 수 없는 -
        </div>
        <div class="text-type-olive text-type-16">
            21년 9월 11일 오후 3시 30분
        </div>
        <div class="text-type-olive text-type-16">
            용산가족공원 버드나무 아래
        </div>
        <v-responsive class="map-container">
            <div id="map">

            </div>
        </v-responsive>
        <v-responsive class="d-flex button-container">
            <v-row class="" justify="space-between" cols="12">
                <v-col class="col-5">
                    <v-btn class="elevation-0 custom-button" block @click="isOpenSnackbar = true"
                    >
                        캘린더 등록
                    </v-btn>
                </v-col>
                <v-snackbar
                        v-model="isOpenSnackbar"
                        :timeout="2000"
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
                    <v-btn class="elevation-0 custom-button" block href='http://kko.to/uepuFiT4o' target="_blank">
                        카카오맵 보기
                    </v-btn>
                </v-col>
            </v-row>
        </v-responsive>
        <!--<div class="map-area-container">
            <v-img src="images/info.png" class="image-container"></v-img>
            <v-responsive class="map-container pl-6 pr-6">
                <div id="map">

                </div>
            </v-responsive>
        </div>
        <v-container>
            <v-row class="ml-8 mr-8 mt-4 mb-4" justify="space-between">
                <v-col class="pa-0" md="4">
                    <v-btn class="elevation-0 custom-button">
                        캘린더 등록
                    </v-btn>
                </v-col>
                <v-col class="pa-0"  md="4">
                    <v-btn class="elevation-0 custom-button">
                        카카오맵 보기
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>-->
    </v-container>
</template>

<script>
    const LONGITUDE = 37.5213937;
    const LATITUDE = 126.9838961;
    const elementId = 'map';

    const createMap = (longitude, latitude) => {
        const container = document.getElementById(elementId);
        const options = {
            // eslint-disable-next-line no-undef
            center: new kakao.maps.LatLng(longitude, latitude),
            level: 5
        };

        // eslint-disable-next-line no-undef
        const map = new kakao.maps.Map(container, options);
        // note: zoom disable
        map.setZoomable(false);

        return map;
    }

    const createMarker = (longitude, latitude, type, map) => {
        // eslint-disable-next-line no-undef
        const position  = new kakao.maps.LatLng(longitude, latitude);

        if (type === 'wed') {
            const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'; // 마커이미지의 주소
            // eslint-disable-next-line no-undef
            const imageSize = new kakao.maps.Size(24, 35); // 마커이미지의 크기
            // const imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            // const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
            // eslint-disable-next-line no-undef
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            // eslint-disable-next-line no-undef
            const marker = new kakao.maps.Marker({
                image: markerImage,
                position,
                map,
            });

            return marker;
        }

        // eslint-disable-next-line no-undef
        const marker = new kakao.maps.Marker({
            position,
            map,
        });

        return marker;
    }

    const createKakaoMap = () => {
        const map = createMap(LONGITUDE, LATITUDE);
        const markerOfWeddingLocation = createMarker(37.5213786,126.9838787, 'wed');
        const station = createMarker(37.5225786,126.9745787);

        markerOfWeddingLocation.setMap(map);
        station.setMap(map)
    }

    const getContainer = () => {
        // return window;
        const container =  document.getElementById('location_map');
        const element = container.getElementsByClassName('image-container')[0]
        console.log(element)
        return element;
    }

    export default {
        name: "LocationMap",
        data: () => ({
            isOpenSnackbar: false,
        }),
        mounted() {
            createKakaoMap();
            // this.addResizeEventListener();
        },
        methods: {
            addResizeEventListener () {
                const element = getContainer();
                element.addEventListener("resize", this.myEventHandler);
            },
            destroyResizeEventListener () {
                const element = getContainer();
                element.removeEventListener("resize", this.myEventHandler);
            },
            myEventHandler(event) {
                console.log(event)
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

    .map-container {
        margin-top: 32px;
        margin-bottom: 16px;
    }

    .button-container {
        /*margin-bottom: 24px;*/
    }

    /*.map-area-container {
        display: flex;
    }*/

    #map {
        width: 656px;
        height: 398px;
        min-height: 199px;
        min-width: 296px;
        /*max-height: 900px;*/
        /*max-width: 1500px;*/
    }


</style>
