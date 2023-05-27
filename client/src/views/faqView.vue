<template>
    <main class="view-Container">
        <h1>Area for desigining faq areas - Assigned to Jose</h1>
        <div class="testingArea">
            <p>There are 3 components (faq#) that you can play with an use to design</p>
            <div class="hBox">
                <faq1/>
                <faq2/>
                <faq3/>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .testingArea {
        width: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
</style>

<script setup>
    import faq1 from '@/components/faq1.vue';
    import faq2 from '@/components/faq2.vue';
    import faq3 from '@/components/faq3.vue';
</script>