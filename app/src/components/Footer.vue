<template>
  <div class="footer">
    <div class="uk-container">
      <vk-grid matched class="uk-child-width-expand@s">
        <div class="footer-nav">
          <router-link class="contact-link" to="/contact"
            >Get In Touch</router-link
          >
        </div>
        <div class="footer-copyright">
          <Copyright class="uk-text-right" />
        </div>
      </vk-grid>
    </div>
  </div>
</template>

<script>
import Copyright from "../components/Copyright.vue";

export default {
  name: "footer",
  components: {
    Copyright
  },
  props: ["content"]
};
</script>

<style scoped>
.footer {
  bottom: 0;
  width: 100%;
  padding: 20px 0 0;
}
.contact-link {
  display: inline-block;
  color: var(--terti);
}
</style>
