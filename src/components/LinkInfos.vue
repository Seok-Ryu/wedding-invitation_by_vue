<template>
    <div>
        <h3> sub </h3>
        <div>
            <a href='http://kko.to/uepuFiT4o'>
                카카오 지도
            </a>
        </div>
        <div>
            <a href='tel:01097371233'>
                석류 전화 연결
            </a>
        </div>
        <div>
            <a href='http://qr.kakao.com/talk/UVtGcjnLd4AatuFKwq6z0iPx0D4-'>
                다영 카톡 연결
            </a>
        </div>
        <div>
            <a href='https://toss.im/_m/TWcYNcA3'>
                석류 토스 연결 (신한 110)
            </a>
        </div>
        <div>
            <a href='https://qr.kakaopay.com/281006011000000817056775'>
                다영 카카오 페이
            </a>
        </div>
        <div>
            <v-btn @click="sendKakaoMessage" id='kakao-link-btn' width="65" height='65'>
                <v-img src= '/images/kakaolink_btn.png' width='65' height='65'/>
            </v-btn>
        </div>


    </div>
</template>

<script>
    console.log('link test')
    export default {
        name: "LinkInfos",
        mounted() {
            this.kakaoInit();
        },
        methods: {
            kakaoInit() {
                // eslint-disable-next-line no-undef
                if(Kakao.isInitialized()) {
                    return;
                }

                // eslint-disable-next-line no-undef
                console.log('before init', Kakao.isInitialized());
                // eslint-disable-next-line no-undef
                Kakao.init("194d203f9fed44b8d0edf6c4158b8863");
                // eslint-disable-next-line no-undef
                Kakao.isInitialized();
                // eslint-disable-next-line no-undef
                console.log('after init', Kakao.isInitialized());
            },
            sendKakaoMessage() {
                this.kakaoInit();
                console.log('send here')
                // eslint-disable-next-line no-undef
                Kakao.Link.sendScrap({
                    requestUrl: 'https://developers.kakao.com',
                });
            }
        }
    }
</script>

<style scoped>

</style>
