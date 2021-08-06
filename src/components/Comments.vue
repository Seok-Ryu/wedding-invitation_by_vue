<template>
    <v-responsive id="comment" class="custom-content-container">
        <div class="divider-bar"></div>
        <div class="title-container text-type-olive text-type-24">
            메시지 남기기
        </div>
        <div class="text-type-black text-type-16" ><span class="text-type-olive">SNS로그인</span>으로 편하게 작성하세요</div>
        <div class="text-type-black text-type-16" >카카오, 네이버, 페이스북, 트위터를 지원합니다</div>
        <div id="lv-container" data-id="city" data-uid="MTAyMC81MzYyMy8zMDA5Ng==">
        </div>
    </v-responsive>
</template>

<script>
    const COMMENT_SCRIPT_URL = 'https://cdn-city.livere.com/js/embed.dist.js';

    export default {
        name: "Comments",
        async mounted() {
            const commentScript = document.querySelector(`script[src="${COMMENT_SCRIPT_URL}"]`);

            if (!commentScript) {
                // this.$log.error('er');
                // console.log(this.$log)
                await this.addCommentScript();
            }
        },
        methods: {
            async addCommentScript () {
                try {
                    await new Promise((resolve, reject) => {
                        const commentScript = document.createElement('script');

                        commentScript.onload = () => {
                            resolve();
                        };
                        commentScript.onerror = () => {
                            reject(new Error('Failed to load daum postcode'));
                        };
                        commentScript.async = true;
                        commentScript.src = COMMENT_SCRIPT_URL;

                        document.getElementsByTagName('head')[0].appendChild(commentScript);
                    });
                } catch (err) {
                    console.error(`comment script load error`, err);
                }
            },
            show() {

            }
        }
    }
    // TODO
    // 2. 카카오 페이 계좌이체 링크 가능할까?
    // 3. 사진 편집후 재업로드 필요
    // 4. 파일 압축 및 난독화로 용량 줄이기

</script>

<style scoped>
    .custom-content-container {
        /*padding-top: 0;*/
        padding-bottom: 0;
    }

    #container .reply-content {
        color: var(--v-secondary-base) !important;
    }

</style>
