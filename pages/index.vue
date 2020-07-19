<template>
  <div id="body">
    <!-- <Layout> -->
    <div id="home" class="container">
      <section class="section">
        <div class="columns">
          <!-- Home -->
          <div class="column" style="padding-top:10%">
            <div style="padding-bottom:20px" class="has-text-centered">
              <h1 class="title has-text-warning is-marginless">
                <q
                  >Laziness is the mother of all bad habits. But ultimately she
                  is a mother and we should respect her</q
                >
                - Shikamaru Nara
              </h1>
              <div>
                <img width="200px" src="../static/naruto.png" />
              </div>
              <div>
                <marquee class="has-text-warning"
                  >emosewa er'uoy siht daer nac uoy fi</marquee
                >
              </div>
            </div>

            <!-- Github Trending -->
            <GithubTrending />
          </div>

          <!-- Tweets -->
          <div class="column is-5-tablet is-4-desktop">
            <Tweet
              id="1005810974241067008"
              :options="{ theme: 'dark', align: 'center' }"
            >
            </Tweet>
            <Tweet
              id="1182672851532423172"
              :options="{
                theme: 'dark',
                conversation: 'none',
                align: 'center'
              }"
            ></Tweet>
            <Tweet
              id="1172329470390239241"
              :options="{ theme: 'dark', align: 'center' }"
            ></Tweet>
            <Tweet
              id="1118170968055218176"
              :options="{ theme: 'dark', align: 'center' }"
            ></Tweet>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
import GithubTrending from '../components/GithubTrending'
export default {
  name: 'Index',
  layout: 'main',
  components: {
    GithubTrending,
    Tweet
  },
  head() {
    return {
      title: '</Home>',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          name: 'home',
          content: 'Github Trending'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'github, trending, javascript, haskell, rust'
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
</style>
