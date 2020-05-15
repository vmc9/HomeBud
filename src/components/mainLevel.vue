<template>
      <nav class="stats-bar level is-mobile">
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Missing Pets</p>
                <p class="title">100</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <img class="image" src="./../assets/images/title.png" alt="TITLE" style="">
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Found Pets</p>
                <p class="title">30</p>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'mainLevel'
}
</script>

<style scoped>
    .stats-bar {
        background-color: #B1D4E0;
    }
    .heading, .title {
        color: ghostwhite;
    }
    .image {
        background-color: #FFF8E7;
    }
</style>
