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
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Christopher Kirk Jones The Creator',
    // all titles will be injected into this template
    titleTemplate: '%s | Christoph K',
    meta: [
      {
        name: 'description',
        content: 'Christopher K Jones is a chronic creator who breathes creativity and innovation for new ideas and products.'
      }
    ]
  }
};
</script>
