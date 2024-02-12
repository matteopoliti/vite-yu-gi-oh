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
        this.getCard(),
            this.getArchetype()
    },
    methods: {
        getCard() {
            store.loading = true

            store.apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype="

            if (store.archetype != "") {
                store.apiUrl += `${store.archetype}`
            }
            axios
                .get(store.apiUrl)
                .then(response => {
                    store.cardList = response.data.data
                    store.loading = false

                })

        },
        getArchetype() {

            axios
                .get(store.apiUrlArchetype)
                .then(response => {
                    store.arrayArchetype = response.data
                    console.log(store.arrayArchetype)
                })

        }
    },
}
</script>

<template>
    <AppHeader />
    <AppMain @changeArchetype="getCard" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>