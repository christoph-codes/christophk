<template>
  <div class="designer page">
    <PageTemp :pageDescription="description" :pageTitle="title">
      Page Content
    </PageTemp>
  </div>
</template>

<script>
import PageTemp from '../components/PageTemp';

export default {
  name: "designer",
  data() {
      return {
          title: "Designer",
          description: "Graphic Design. Logo Design. Print Design. Digital Design. Web Design"
      }
  },
  components: {
      PageTemp
  }
};
</script>
