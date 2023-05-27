<style scoped>
    @import '../assets/homepage.css';
    /* At the moment, it only changes the color of h1 */
</style>

<template>
    <main class="view-Container">
        <h1>This is the Home Page</h1>
        <p>Refer to assets/main.css to see the css styling on this "main" container. 
            <br>
            If you want to change it, remove the view-Container class from the main in this component.
            <br>
            Refer to the readme for links to go to other pages within this project.
            <br>
            I know yall may not want to do the css in the same file, so I linked it to another css file in the assets folder.
            <br>
            However, do keep the script setup and do your javascript there.
            <br>
            I will have a few components ready at your disposal. Think of them as div containers that are responsive
            <br>
            To edit them, go to the corrosponding vue file in the components folder.
            <br>
            view-Container and componentContainer are global classes (used in multiple files) that I defined in main.css
        </p>
        <freeComp/>
        <freeComp2/>
        <freeComp3/>
        <!-- The freeComp components also are green because they are children of HomeView.vue. So they also get the styling -->
    </main>
</template>


<script setup>
    import freeComp from '../components/freeComp.vue';
    import freeComp2 from '../components/freeComp2.vue';
    import freeComp3 from '../components/freeComp3.vue';

</script>