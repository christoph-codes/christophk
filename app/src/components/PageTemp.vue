<template>
    <div class="page-content">
      <div class="vert-align">
          <h1 class="page-title">{{ pageTitle }}</h1><p class="page-description">{{ pageDescription }}</p>
          <slot/>
        
      </div>
    </div>
</template>

<script>
export default {
  name: "designer",
  props: ["pageDescription", "pageTitle"]
};
</script>

<style scoped>
.page-title {
    color: white;
    padding-bottom: 10px;
    border-bottom: 0.5px solid var(--terti);
    margin: 0 0 10px;
    font-weight: lighter;
}
.page-description {
    color: var(--terti);
    margin-top: 0;
    margin-bottom: 20px;
}
@media(max-width: 767px) {
  h1.page-title, p.page-description {
    text-align: center;
}
}
</style>