<template>
  <div id="app">
    <Header/>
    <div class="uk-container">
      <router-view/>
    </div>
    <Footer />
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
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Christopher Kirk Jones The Artist',
    // all titles will be injected into this template
    titleTemplate: '%s | Christoph K'
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
  .page-content {
    height: calc(100vh - 145px);
}

.vert-align {
    margin: 0 0 0 20%;
    top: 50vh;
    width: 80%;
    transform: translateY(-50vh);
    position: relative;
}
.home .vert-align {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
.uk-offcanvas-bar {
    background: black !important;
}
@media(max-width: 760px) {
  .page-content {
    min-height: 100vh;
    height: inherit;
}
  .vert-align {
    margin: 0;
    width: 100%;
  }
  .home .vert-align {
    width: 90%;
  }
}
</style>
