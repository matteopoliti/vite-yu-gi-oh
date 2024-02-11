<template>
    <header>
        <figure>
            <img src="../../assets/img/Yu-Gi-Oh!_(Logo).jpg" alt="Logo Yu-gi-oh">
        </figure>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
header {
    figure {
        text-align: center;
        padding: 20px;
        display: flex;
        justify-content: center;

        img {
            width: 400px;
        }
    }
}
</style>