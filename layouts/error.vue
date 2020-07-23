<template>
  <div class="notFound">
    <div class="container">
      <div style="padding-top:50px;" class="has-text-centered">
        <h1 v-if="error.statusCode === 404" class="title has-text-warning">
          &lt;Not Found/&gt;
        </h1>
        <h1 v-else class="title has-text-warning">An error occurred</h1>

        <h1 class="title has-text-warning">¯\_(ツ)_/¯</h1>
      </div>
      <div class="has-text-centered" style="margin-top:30px">
        <a href="/">
          <img
            style="width:300px"
            src="../static/keep-calm-and-walk-on-home-boy-2.png"
            alt="image"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>

<style scoped>
.notFound {
  background-color: black;
  height: 100vh;
}
</style>
