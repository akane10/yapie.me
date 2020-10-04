<template>
  <div class="container">
    <h3 id="title-github" class="has-text-centered title has-text-warning">
      Github Trending {{ what }}
    </h3>
    <div class="field">
      <div class="control has-text-centered">
        <div
          :class="{
            'is-loading':
              isFetching.javascript || isFetching.haskell || isFetching.rust
          }"
          class="select is-warning is-small "
        >
          <label for="since">
            <select
              id="since"
              v-model="since"
              @change="changeSince"
              class="has-background-black has-text-warning"
            >
              <option class="has-text-warning">daily</option>
              <option class="has-text-warning">weekly</option>
              <option class="has-text-warning">monthly</option>
            </select>
          </label>
        </div>
      </div>
    </div>
    <div class="columns is-centered is-multiline is-desktop">
      <div v-for="(lang, i) in languages" :key="i" class="column">
        <h3 class="has-text-centered subtitle has-text-warning is-marginless">
          <span id="subtitle-github">{{ lang }}</span>
        </h3>
        <div class="tile is-ancestor columns is-centered has-text-centered">
          <div class="tile column is-vertical is-parent">
            <div
              v-if="isFetching[lang]"
              class="tile is-child box has-background-warning"
            >
              <Loading />
            </div>

            <div
              v-else-if="err[lang]"
              class="tile is-child box has-background-warning"
            >
              Upps sorry, something went wrong
            </div>

            <div
              v-else
              v-for="(x, ii) in data[lang]"
              :key="ii"
              class="tile is-child box has-background-warning"
            >
              <a :href="x.url" rel="noreferrer dns-prefetch" target="_blank">
                <div class="title content-github">
                  {{ x.name }}
                </div>
                <div class="has-text-dark content-github">
                  {{ x.description }}
                </div>
                <div class="tags is-centered">
                  <div class="tag is-black">
                    <span>{{ x.language }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GithubTrending',
  components: {
    Loading: () => import('./Loading')
  },
  data() {
    return {
      languages: ['javascript', 'haskell', 'rust'],
      data: {
        javascript: [],
        haskell: [],
        rust: []
      },
      since: 'daily',
      isFetching: {
        javascript: true,
        haskell: true,
        rust: true
      },
      err: {
        javascript: false,
        haskell: false,
        rust: false
      }
    }
  },
  computed: {
    what() {
      return new Map([
        ['daily', 'Today'],
        ['weekly', 'This Week'],
        ['monthly', 'This Month']
      ]).get(this.since)
    }
  },
  mounted() {
    const fetchSince = this.fetchTrending(this.since)
    fetchSince('javascript')
    fetchSince('haskell')
    fetchSince('rust')
  },
  methods: {
    changeSince() {
      const fetchSince = this.fetchTrending(this.since)
      fetchSince('javascript')
      fetchSince('haskell')
      fetchSince('rust')
    },
    fetchTrending(since = 'daily') {
      return async (language) => {
        try {
          this.err[language] = false
          this.data[language] = []
          this.isFetching[language] = true

          const baseUrl = `https://github-trending-api.now.sh`
          const url = `${baseUrl}/repositories?since=${since}&spoken_language_code=en&language=${language}`
          const res = await fetch(url)
          const data = await res.json()

          this.data[language] = data.slice(0, 3)
          this.isFetching[language] = false
        } catch (e) {
          this.isFetching[language] = false
          this.err[language] = true
        }
      }
    }
  }
}
</script>

<style scoped>
#title-github {
  margin-bottom: 5px;
}

.content-github {
  margin-bottom: 10px;
  font-size: 1rem;
}

#subtitle-github {
  text-transform: capitalize;
}
</style>
