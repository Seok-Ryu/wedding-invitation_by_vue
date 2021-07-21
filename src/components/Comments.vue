<template>
    <v-responsive id="comment" class="custom-content-container">
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
                    console.error(err);
                }
            },
            show() {

            }
        }
    }
    // TODO
    // 1. 구글 캘린더
    // 2. 카카오 페이 계좌이체 링크 가능할까?
    // 3. 링크 타이틀 수정

</script>

<style scoped>
    .custom-content-container {
        padding-top: 0;
        padding-bottom: 0;
    }

</style>
