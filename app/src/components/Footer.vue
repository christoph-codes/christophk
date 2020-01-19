<template>
  <div class="main-footer">
    <div class="uk-container">
      <vk-grid matched class="uk-child-width-expand@s">
        <div class="footer-nav uk-visible@m">
          <router-link class="contact-link" to="/contact"
            >Get In Touch</router-link
          >
        </div>
        <div class="footer-copyright">
          <Copyright />
        </div>
      </vk-grid>
    </div>
  </div>
</template>

<script>
import Copyright from "../components/Copyright.vue";

export default {
  name: "main-footer",
  components: {
    Copyright
  }
};
</script>

<style scoped>
.main-footer {
  bottom: 0;
  width: 100%;
  padding: 20px 0 0;
}
.contact-link {
  display: inline-block;
  color: var(--terti);
}
</style>
