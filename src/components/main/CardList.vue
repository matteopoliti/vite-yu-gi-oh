<template>
    <div class="col">
        <figure>
            <img :src="propsElement.card_images[0].image_url" alt="">
        </figure>
        <div class="info">
            <p>{{ propsElement.name }}</p>
            <span>{{ propsElement.archetype }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardList",
    props: [
        "propsElement"
    ],
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

.col {
    width: calc(100% / 5 - 20px + (20px / 5));

    .info {
        background-color: $bg_main;
        padding: 20px;
        min-height: 150px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        p {
            color: #fff;
            text-transform: uppercase;
            font-size: 20px;
            font-weight: bold;
        }

        span {
            text-transform: capitalize;
            font-size: 20px;
        }
    }
}
</style>