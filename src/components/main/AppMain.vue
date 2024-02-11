<template>
    <main>
        <div class="container">
            <div>
                <label for="type">Choose a archetype:</label>

                <select name="type" id="type">
                    <option value="Alien">Alien</option>
                    <option value="Robot">Robot</option>
                    <option value="Dyno">Dyno</option>
                    <option value="Fairies">Fairies</option>
                </select>
            </div>
            <div class="bg_white">
                <div class="result">
                    <p>Found 39 cards</p>
                </div>
                <div class="row">
                    <CardList v-for="(element, index) in store.cardList" :key="index" :propsElement="element" />

                </div>


            </div>
        </div>
    </main>
</template>

<script>
import CardList from "./CardList.vue"
import { store } from "../../store"

export default {
    name: "AppMain",
    components: {
        CardList
    },
    data() {

        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

main {
    background-color: $bg_main;

    .container {
        padding-block: 30px;

        >div {
            margin-bottom: 20px;

            label {
                font-size: 30px;
                color: #fff;
            }

            select {
                padding: 5px;
                min-width: 90px;
                font-size: 20px;
                line-height: 1;
                border: 1px solid #ddd;
                border-radius: 5px;
                height: 34px;
                padding-right: 50px;
                margin-left: 20px;
            }
        }

        .bg_white {
            background-color: #fff;
            padding: 50px;

            .result {
                background-color: #212529;
                padding: 20px;
                color: #fff;
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .row {
                display: flex;
                gap: 20px;
                flex-wrap: wrap;
            }
        }
    }

}
</style>