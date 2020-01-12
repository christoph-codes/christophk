<template>
  <div class="creator page">
    <PageTemp :pageDescription="description" :pageTitle="title">
      Page Content
    </PageTemp>
  </div>
</template>

<script>
import PageTemp from '../components/PageTemp';

export default {
  name: "creator",
  data() {
        return {
            title: "Creator",
            description: "Entrepreneur. Marketer. Original Ideas. Executor."
        }
    },
  components: {
      PageTemp
  }
};
</script>
