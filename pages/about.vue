<template>
  <div id="body">
    <section id="title-section" class="section">
      <div class="container">
        <div id="the-title" class="has-text-centered">
          <h1 class="title has-text-warning">&lt;/Yapie Rosyadie&gt;</h1>
        </div>
      </div>
    </section>

    <section id="content-section" class="section">
      <div class="container">
        <div class="columns is-centered">
          <div
            class="column is-three-fifths has-text-centered has-text-primary"
          >
            <p>
              Feeling lazy, might write about page later
            </p>
            <div id="image">
              <img src="../static/lazyCorgi.jpg" alt="lazyCorgi image" />
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
#image {
  margin-top: 10px;
}
#content-section {
  margin-bottom: 40px;
  padding-top: 0;
}
#the-title {
  margin-top: 30px;
}
#title-section {
  padding-bottom: 20px;
}
</style>
