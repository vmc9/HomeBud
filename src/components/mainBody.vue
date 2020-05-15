<template>
    <div id="main">
        <mainLevel/>
        <mainDisplay/>
    </div>
</template>

<script>
import mainLevel from './mainLevel'
import mainDisplay from './mainDisplay'

export default {
    name: 'mainBody',
    components: {
        mainLevel,
        mainDisplay
    }
};
</script>

<style scoped>
    #main {
        background-color: #5271FF;
    }
</style>