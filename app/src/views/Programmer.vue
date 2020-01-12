<template>
    <div class="programmer page">
        <PageTemp :pageDescription="description" :pageTitle="title">
      Page Content
    </PageTemp>
    </div>
</template>

<script>
import PageTemp from '../components/PageTemp';

export default {
    name: "programmer",
    data() {
        return {
            title: "Programmer",
            description: "HTML, CSS, JS. Vue.js. React. Firebase. MYSQL. Node. PHP."
        }
    },
  components: {
      PageTemp
  }
}
</script>