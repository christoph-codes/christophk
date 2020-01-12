<template>
  <div id="app">
    <Header/>
    <div class="uk-container">
      <router-view/>
    </div>
    <Footer :content=" footerContent " />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

:root {
  --prime: #4E5225;
  --secon: #A6AE54;
  --terti: #7F825E;
  --red: #D35959;
}
html {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
}
  #app {
    background: var(--prime);
    min-height: 100vh;
  }
</style>
