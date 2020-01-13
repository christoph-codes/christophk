<template>
  <div class="designer page">
    <PageTemp :pageDescription="description" :pageTitle="title">
      <div class="img-group">
          <img :src="logos[0]" alt="Kickstarters Logo Design"/>
      </div>
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
          description: "Graphic Design. Logo Design. Print Design. Digital Design. Web Design",
          logos: [
              "/app/src/assets/ks_logo@2x.png"
          ]
      }
  },
  components: {
      PageTemp
  }
};
</script>
