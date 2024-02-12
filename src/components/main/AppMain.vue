<template>
    <main>
        <div class="container">

            <div>
                <label for="type">Choose a archetype:</label>

                <select name="type" id="type" v-model="store.archetype" @change="$emit('changeArchetype')">
                    <option :value="item.archetype_name" v-for="(item, index) in store.arrayArchetype" :key="index">
                        {{ item.archetype_name }}</option>
                </select>
            </div>
            <div class="bg_white">
                <div class="result">
                    <p>Found {{ store.cardList.length }} cards</p>
                </div>
                <div v-if="(store.loading)" class="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div :class="(store.cardList.length > store.cardList.length - 1) ? 'row' : 'd_none'">
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

            .d_none {
                display: none;
            }

            .lds-spinner {
                color: official;
                display: inline-block;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                width: 80px;
                height: 80px;
            }

            .lds-spinner div {
                transform-origin: 40px 40px;
                animation: lds-spinner 1.2s linear infinite;
            }

            .lds-spinner div:after {
                content: " ";
                display: block;
                position: absolute;
                top: 3px;
                left: 37px;
                width: 6px;
                height: 18px;
                border-radius: 20%;
                background: $bg_main;
            }

            .lds-spinner div:nth-child(1) {
                transform: rotate(0deg);
                animation-delay: -1.1s;
            }

            .lds-spinner div:nth-child(2) {
                transform: rotate(30deg);
                animation-delay: -1s;
            }

            .lds-spinner div:nth-child(3) {
                transform: rotate(60deg);
                animation-delay: -0.9s;
            }

            .lds-spinner div:nth-child(4) {
                transform: rotate(90deg);
                animation-delay: -0.8s;
            }

            .lds-spinner div:nth-child(5) {
                transform: rotate(120deg);
                animation-delay: -0.7s;
            }

            .lds-spinner div:nth-child(6) {
                transform: rotate(150deg);
                animation-delay: -0.6s;
            }

            .lds-spinner div:nth-child(7) {
                transform: rotate(180deg);
                animation-delay: -0.5s;
            }

            .lds-spinner div:nth-child(8) {
                transform: rotate(210deg);
                animation-delay: -0.4s;
            }

            .lds-spinner div:nth-child(9) {
                transform: rotate(240deg);
                animation-delay: -0.3s;
            }

            .lds-spinner div:nth-child(10) {
                transform: rotate(270deg);
                animation-delay: -0.2s;
            }

            .lds-spinner div:nth-child(11) {
                transform: rotate(300deg);
                animation-delay: -0.1s;
            }

            .lds-spinner div:nth-child(12) {
                transform: rotate(330deg);
                animation-delay: 0s;
            }

            @keyframes lds-spinner {
                0% {
                    opacity: 1;
                }

                100% {
                    opacity: 0;
                }
            }


        }




    }

}
</style>