<template>
    <div class="page-not-found">
        <h1>404 Error!</h1>
    </div>
</template>

<script>
export default {
    name: "Page Not Found",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Whoops! Page Not Found!',
    // all titles will be injected into this template
    titleTemplate: '%s | Christoph K'
  }
}
</script>