<template>
    <div class="contact page">
        <PageTemp :pageDescription="description" :pageTitle="title">
      Page Content
    </PageTemp>
    </div>
</template>

<script>
import PageTemp from '../components/PageTemp';

export default {
    name: "contact",
    data() {
        return {
            title: "Contact",
            description: "Contact me today and let’s work together. I’m always ready!"
        }
    },
  components: {
      PageTemp
  }
}
</script>