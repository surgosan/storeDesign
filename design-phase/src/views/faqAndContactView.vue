<template>
    <main class="view-Container">
        <h1>Contact</h1>
        <div class="hBox">
            <faqInfo/>
            <span class="hBoxSeperation"></span>
            <contactForm/>
        </div>
    </main>
</template>

<style scoped>

</style>

<script setup>
    import contactForm from '@/components/contact-form.vue';
    import faqInfo from '@/components/faq-info.vue';
</script>