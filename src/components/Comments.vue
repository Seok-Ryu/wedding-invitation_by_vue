<template>
    <v-container id="comment" class="custom-content-container">
        <div id="lv-container" data-id="city" data-uid="MTAyMC81MzYyMy8zMDA5Ng==">
        </div>
    </v-container>
</template>

<script>
    const DAUM_POSTCODE_URL = 'https://cdn-city.livere.com/js/embed.dist.js';

    export default {
        name: "Comments",
        async mounted() {
            const daumPostcodeLoaded = document.querySelector(`script[src="${DAUM_POSTCODE_URL}"]`);

            if (!daumPostcodeLoaded) {
                console.log('loaded')
                try {
                    await new Promise((resolve, reject) => {
                        const daumScript = document.createElement('script');

                        daumScript.onload = () => {
                            resolve();
                        };
                        daumScript.onerror = () => {
                            reject(new Error('Failed to load daum postcode'));
                        };
                        daumScript.async = true;
                        daumScript.src = DAUM_POSTCODE_URL;

                        document.getElementsByTagName('head')[0].appendChild(daumScript);
                    });
                } catch (err) {
                    console.error(err);
                }
            }
        },
        methods: {
            show() {

            }
        }
    }
    // TODO
    // 1. 구글 캘린더

    // 7. 상수 (CONSTANTS 템플릿에서 어떻게 사용?)

    // 2. 전체적으로 720 사이즈 / 360 사이즈 정리

    // 카카오 페이 계좌이체 링크 가능할까?

</script>

<style scoped>

</style>
