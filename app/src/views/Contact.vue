<template>
    <div class="contact page">
        <PageTemp :pageDescription="description" :pageTitle="title">
      <vk-grid>
            <div class="uk-width-1-6@m contact-labels">
              <p>Email:</p>
              <p>Phone:</p>
              <p>Social:</p>
            </div>
            <div class="uk-width-5-6@m contact-details">
              <p><b>tkcwebdev@gmail.com</b></p>
              <p><b>702.336.0322</b></p>
              <p><b>@christoph.theartist</b></p>
            </div>
      </vk-grid>
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
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Contact Christopher Kirk Jones The Artist',
    // all titles will be injected into this template
    titleTemplate: '%s | Christoph K'
  }
}
</script>

<style scoped>
.contact-labels p {
    font-weight: bold;
    color: white;
}
.contact-details p {
    color: var(--terti);
    font-weight: lighter;
}
</style>