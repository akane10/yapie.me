<template>
  <div id="body">
    <section class="section" style="padding-bottom:20px">
      <div class="container">
        <div style="margin-top:30px;" class="has-text-centered">
          <h1 class="title has-text-warning">&lt;/Yapie Rosyadie&gt;</h1>
        </div>
      </div>
    </section>

    <section class="section" style="margin-bottom:40px; padding-top:0;">
      <div class="container">
        <div class="columns is-centered">
          <div
            class="column is-three-fifths has-text-centered has-text-primary"
          >
            <p>
              Feeling lazy, might write about page later
            </p>
            <div style="margin-top:10px">
              <img style="width:200px" src="../static/lazyCorgi.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: 'main',
  head() {
    return {
      title: '</About>',
      meta: [
        {
          hid: 'og-about',
          property: 'og:about',
          name: 'about',
          content: 'Yapie Rosyadie'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'yapie, rosyadie, about'
        }
        // other meta
      ]
    }
  }
}
</script>

<style scoped>
#body {
  min-height: 100vh;
}
@media (max-width: 768px) {
  #body {
    min-height: 0;
  }
}
</style>
