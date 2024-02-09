<template>
    <main>
        <div class="container">
            <div>
                <label for="type">Choose a type:</label>

                <select name="type" id="type">
                    <option value="Alien">Alien</option>
                    <option value="Robot">Robot</option>
                    <option value="Dyno">Dyno</option>
                    <option value="Fairies">Fairies</option>
                </select>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "AppMain",
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;

main {
    background-color: $bg_main;
    height: 500px;

    .container {
        padding-block: 30px;

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

}
</style>