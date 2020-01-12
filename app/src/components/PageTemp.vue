<template>
    <div class="page-content">
      <div class="vert-align">
          <h1>{{ pageTitle }}</h1>
          <slot/>
        <p class="page-description">{{ pageDescription }}</p>
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

.page-description {
    color: var(--terti);
    padding-top: 10px;
    border-top: 0.5px solid;
}
</style>