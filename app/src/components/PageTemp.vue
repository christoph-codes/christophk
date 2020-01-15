<template>
    <div class="page-content">
      <div class="vert-align">
          
          <slot/>
        <h1 class="page-title">{{ pageTitle }}</h1><p class="page-description">{{ pageDescription }}</p>
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
    padding-top: 10px;
    border-top: 0.5px solid var(--terti);
    margin: 50px 0 0;
    font-weight: lighter;
}
.page-description {
    color: var(--terti);
    margin-top: 0;
}
</style>