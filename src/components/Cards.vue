<script setup lang="ts">
import Card from './Card.vue';

const templateWords = [
    {
        jap: "ついたち",
        eng: "tsuitachi",
        number: 1,
        kanji: "一日",
    },
    { jap: "ふつか", eng: "futsuka", number: 2, kanji: "二日" },
    { jap: "みっか", eng: "mikka", number: 3, kanji: "三日" },
    { jap: "よっか", eng: "yokka", number: 4, kanji: "四日" },
    { jap: "いつか", eng: "itsuka", number: 5, kanji: "五日" },
    { jap: "むいか", eng: "muika", number: 6, kanji: "六日" },
    { jap: "なのか", eng: "nanoka", number: 7, kanji: "七日" },
    { jap: "ようか", eng: "youka", number: 8, kanji: "八日" },
    { jap: "ここのか", eng: "kokonoka", number: 9, kanji: "九日" },
    { jap: "とおか", eng: "tooka", number: 10, kanji: "十日" },
    { jap: "じゅういちにち", eng: "juuichinichi", number: 11, kanji: "十一日" },
    { jap: "じゅうににち", eng: "juuninichi", number: 12, kanji: "十二日" },
    { jap: "じゅうさんにち", eng: "juusannichi", number: 13, kanji: "十三日" },
    { jap: "じゅうよっか", eng: "juuyokka", number: 14, kanji: "十四日" },
    { jap: "じゅうごにち", eng: "juugonichi", number: 15, kanji: "十五日" },
    { jap: "じゅうろくにち", eng: "juurokunichi", number: 16, kanji: "十六日" },
    { jap: "じゅうしちにち", eng: "juushichinichi", number: 17, kanji: "十七日" },
    { jap: "じゅうはちにち", eng: "juuhachinichi", number: 18, kanji: "十八日" },
    { jap: "じゅうくにち", eng: "juukunichi", number: 19, kanji: "十九日" },
    { jap: "はつか", eng: "hatsuka", number: 20, kanji: "二十日" },
    {
        jap: "にじゅういちにち",
        eng: "nijuuichinichi",
        number: 21,
        kanji: "二十一日",
    },
    { jap: "にじゅうににち", eng: "nijuuninichi", number: 22, kanji: "二十二日" },
    {
        jap: "にじゅうさんにち",
        eng: "nijuusannichi",
        number: 23,
        kanji: "二十三日",
    },
    { jap: "にじゅうよっか", eng: "nijuuyokka", number: 24, kanji: "二十四日" },
    { jap: "にじゅうごにち", eng: "nijuugonichi", number: 25, kanji: "二十五日" },
    {
        jap: "にじゅうろくにち",
        eng: "nijuurokunichi",
        number: 26,
        kanji: "二十六日",
    },
    {
        jap: "にじゅうしちにち",
        eng: "nijuushichinichi",
        number: 27,
        kanji: "二十七日",
    },
    {
        jap: "にじゅうはちにち",
        eng: "nijuuhachinichi",
        number: 28,
        kanji: "二十八日",
    },
    { jap: "にじゅうくにち", eng: "nijuukunichi", number: 29, kanji: "二十九日" },
    { jap: "さんじゅうにち", eng: "sanjuunichi", number: 30, kanji: "三十日" },
    {
        jap: "さんじゅういちにち",
        eng: "sanjuuichinichi",
        number: 31,
        kanji: "三十一日",
    },
];


</script>

<template>
    <div class="container">
        <Card />
    </div>
</template>


<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    box-sizing: border-box;
}
</style>