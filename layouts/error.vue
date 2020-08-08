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
        <img
          style="width:100px"
          src="../static/pantera.jpg"
          alt="pantera image"
        />
        <div
          class="title has-text-centered has-text-warning is-marginless is-size-2"
        >
          Keep
        </div>
        <div
          class="title has-text-centered has-text-warning is-marginless is-size-2"
        >
          Calm
        </div>
        <div class="title has-text-centered has-text-warning is-marginless">
          And
        </div>
        <div
          class="title has-text-centered has-text-warning is-marginless is-size-2"
        >
          Walk On
        </div>
        <div
          class="title has-text-centered has-text-warning is-marginless is-size-2"
        >
          <a href="/" class="has-text-light">Home</a>, Boy.
        </div>
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
