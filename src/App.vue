<script>
import AppHeader from "./components/header/AppHeader.vue"
import AppMain from "./components/main/AppMain.vue"

import axios from "axios";
import { store } from "./store";

export default {
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            store,
        };
    },
    mounted() {
        this.getCard()
    },
    methods: {
        getCard() {
            axios
                .get(store.apiUrl)
                .then(response => {
                    store.cardList = response.data.data
                })
        }
    },
}
</script>

<template>
    <AppHeader />
    <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>