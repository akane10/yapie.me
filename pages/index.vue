<template>
  <div id="body">
    <!-- <Layout> -->
    <div id="home" class="container">
      <section class="section">
        <div class="columns">
          <!-- Home -->
          <div id="main" class="column">
            <div id="top" class="has-text-centered">
              <h1 class="title has-text-warning is-marginless">
                <q
                  >Laziness is the mother of all bad habits. But ultimately she
                  is a mother and we should respect her</q
                >
                - Shikamaru Nara
              </h1>
              <div>
                <img
                  alt="naruto image"
                  width="200px"
                  src="../static/naruto.png"
                />
              </div>
              <div>
                <marquee class="has-text-warning"
                  >emosewa er'uoy siht daer nac uoy fi</marquee
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'main',
  components: {},
  head() {
    return {
      title: '</Home>',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          name: 'home',
          content: '</Home> - Yapie Rosyadie'
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  }
}
</script>

<style scoped>
#home {
  min-height: 100vh;
}
#main {
  padding-top: 10%;
}
#top {
  padding-bottom: 20px;
}
</style>
