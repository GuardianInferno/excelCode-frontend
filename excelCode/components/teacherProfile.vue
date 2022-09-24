<template>
    <div class="container">
        <div class="cards">
            <ClassCard />
            <ClassCard />
            <ClassCard />
        </div>

    </div>
</template>

<script setup lang="ts">
import classCard from 'classCard.vue'

</script>

<style scoped lang="scss">
.container {
    height: 94vh;
    width: 100vw;
    display: flex;
    padding: 7rem 10rem 0 10rem;
    .cards{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
}

</style>