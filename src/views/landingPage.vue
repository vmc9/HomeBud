<template>
    <div>
        <navBar/>
        <mainBody/>
    </div>
</template>

<script>
import navBar from './../components/navBar';
import mainBody from './../components/mainBody';
export default {
    name: 'landingPage',
    components: {
        navBar,
        mainBody,
    }
};
</script>