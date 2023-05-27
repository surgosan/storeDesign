<template>
  <main class="view-Container">
    <h1>The is the area we will use to design small components</h1>
    <p>Any Ideas on what to do here?</p>
    <button @click="checkCheck">Click Me</button>
     <span id="decoration">
        <span id="decor2"></span>
        <span id="decor3"></span>
        <span id="decor4"></span>
     </span>
  </main>
</template>

<style scoped>
  #decoration {
    position: relative;
    width: 20rem;
    aspect-ratio: 1;
    border-radius: 1rem;
    background-color: var(--main);
  }
  #decor2 {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 8rem;
    aspect-ratio: 1;
    background-color: var(--secondary);
    border-radius: 1rem;
  }
  #decor3 {
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 12rem;
    aspect-ratio: 1;
    background-color: var(--text);
    border-radius: 1rem;
  }
  #decor4 {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 4rem;
    aspect-ratio: 1;
    background-color: var(--accent);
    border-radius: 1rem;
  }
</style>

<script setup>
  function checkCheck()
    {
        alert('Loser')
    }
</script>