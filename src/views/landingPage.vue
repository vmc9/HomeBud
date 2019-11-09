<template>
    <div>
        <navBar/>
        <mainBody/>
        <pageFoot/>
    </div>
</template>

<script>
import navBar from './../components/navBar';
import mainBody from './../components/mainBody';
import pageFoot from './../components/pageFoot';

export default {
    name: 'landingPage',
    components: {
        navBar,
        mainBody,
        pageFoot,
    }
};
</script>