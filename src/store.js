import { reactive } from "vue";

export const store = reactive({
    cardList: [],
    loading: true,
    archetype: "",
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
    apiUrlArchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    arrayArchetype: []
})