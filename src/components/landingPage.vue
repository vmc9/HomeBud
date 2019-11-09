<template>
    <div>
        <navBar/>
        <mainBody/>
        <pageFoot/>
    </div>
</template>

<script>
import navBar from './navBar';
import mainBody from './mainBody';
import pageFoot from './pageFoot';

export default {
    name: 'landingPage',
    components: {
        navBar,
        mainBody,
        pageFoot,
    }
};
</script>