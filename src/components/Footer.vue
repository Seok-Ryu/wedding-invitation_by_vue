<template>
    <v-footer color="accent">
        <v-row class="" justify="space-between" cols="12">
            <v-col
                class="text-center"
                cols="5"
                >
                <router-link to="/privacy" class="privacy_text">
                    {{ $t('view.footer.title') }}
                </router-link>
            </v-col>
            <v-col
                class="text-center"
                cols="5"
                >
                <strong>  © Ryuliah</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .privacy_text {
        font-style: normal;
        letter-spacing: 0em;
        color: var(--v-secondary-base);
    }
</style>
