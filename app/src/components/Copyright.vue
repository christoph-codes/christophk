<template>
  <div class="copyright">
    <p>
      Copyright © 2020. All Rights Reserved. Made with
      <vk-icons-heart class="heart-icon" /> by Christoph K.
    </p>
  </div>
</template>

<script>
export default {
  name: "copyright"
};
</script>

<style>
.copyright {
  color: var(--secon);
}
.copyright p {
    font-size: 12px;
    text-align: right;
}
.copyright svg path {
  fill: var(--red);
  stroke: none;
}
@media(max-width: 767px) {
  .copyright p {
    text-align: center;
}
}
</style>
