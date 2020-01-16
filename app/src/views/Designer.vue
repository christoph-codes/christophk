<template>
  <div class="designer page">
    <PageTemp :pageDescription="description" :pageTitle="title">
      <div class="img-group">
          <vk-grid>
              <div class="logo_img uk-width-1-3@m">
                <img src="../assets/ks_logo@2x.png" alt="Kickstarterz Custom Logo Design" />
              </div>
              <div class="logo_img uk-width-1-3@m">
                <img src="../assets/ll_logo@2x.png" alt="Lazer Ladies Custom Logo Design" />
              </div>
              <div class="logo_img uk-width-1-3@m">
                <img src="../assets/eig_logo@2x.png" alt="Everett Insurance Group Custom Logo Design" />
              </div>
          </vk-grid>
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
      }
  },
  components: {
      PageTemp
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Christopher Kirk Jones The Designer',
    // all titles will be injected into this template
    titleTemplate: '%s | Christoph K'
  }
};
</script>

<style scoped>
.img-group {
    padding: 50px 0;
    text-align: center;
    overflow-x: scroll;
}
.logo_img img {
    max-height: 200px;
}
</style>