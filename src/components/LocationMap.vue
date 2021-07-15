<template>
    <v-container id="location_map">
        <v-img src="images/info.png"></v-img>
        <v-responsive class="map-container pl-6 pr-6">
            <div id="map">

            </div>
        </v-responsive>
    </v-container>
</template>

<script>
    const LONGITUDE = 37.5213937;
    const LATITUDE = 126.9838961;
    const elementId = 'map';

    const createMap = (longitude, latitude) => {
        console.log('pi')
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

    const init = () => {
        const map = createMap(LONGITUDE, LATITUDE);
        const markerOfWeddingLocation = createMarker(37.5213786,126.9838787, 'wed');
        const station = createMarker(37.5225786,126.9745787);

        markerOfWeddingLocation.setMap(map);
        station.setMap(map)
    }

    export default {
        name: "LocationMap",
        mounted() {
            init();
        },
        methods: {
            show() {

            }
        }
    }
</script>

<style scoped>
    #location_map {
        /*display: flex;*/
    }

    .map-container {

        /*margin-left: -100%;*/
        /*margin-top: 40%;*/
    }

    #map {
        min-height: 398px;
        min-width: 592px;
    }


</style>
