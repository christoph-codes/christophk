<template>
  <div class="creator page">
    <PageTemp :pageDescription="description" :pageTitle="title">
      <div class="creator_logos">
          <img src="../assets/creator_logos@2x.png" alt="Business ideas created by Christopher K Jones" />
      </div>
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
