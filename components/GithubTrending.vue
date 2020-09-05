<template>
  <div class="container">
    <h3 id="title-github" class="has-text-centered title has-text-warning">
      Github Trending {{ what }}
    </h3>
    <div class="field">
      <div class="control has-text-centered">
        <div
          :class="{ 'is-loading': isFetching }"
          class="select is-warning is-small "
        >
          <label for="since">
            <select
              id="since"
              v-model="since"
              @change="changeSince"
              class="has-background-black has-text-warning"
            >
              <option>daily</option>
              <option>weekly</option>
              <option>monthly</option>
            </select>
          </label>
        </div>
      </div>
    </div>
    <div class="columns is-centered is-multiline is-desktop">
      <div class="column">
        <h3
          id="subtitle-github"
          class="has-text-centered subtitle has-text-warning is-marginless"
        >
          Javascript
        </h3>
        <div class="tile is-ancestor columns is-centered has-text-centered">
          <div class="tile column is-vertical is-parent">
            <div
              v-if="javascript.length == 0"
              class="tile is-child box has-background-warning"
            >
              <Loading />
            </div>
            <div
              v-else
              v-for="(data, i) in javascript"
              :key="i"
              class="tile is-child box has-background-warning"
            >
              <a :href="data.url" rel="noreferrer dns-prefetch" target="_blank">
                <div class="title content-github">
                  {{ data.name }}
                </div>
                <div class="has-text-dark content-github">
                  {{ data.description }}
                </div>
                <div class="tags is-centered">
                  <div class="tag is-black">
                    <span>{{ data.language }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <h3 class="has-text-centered subtitle has-text-warning is-marginless">
          Haskell
        </h3>
        <div class="tile is-ancestor columns is-centered has-text-centered">
          <div class="tile column  is-vertical is-parent">
            <div
              v-if="haskell.length == 0"
              class="tile is-child box has-background-warning"
            >
              <Loading />
            </div>
            <div
              v-else
              v-for="(data, i) in haskell"
              :key="i"
              class="tile is-child box has-background-warning"
            >
              <a :href="data.url" rel="noreferrer dns-prefetch" target="_blank">
                <div class="title content-github">
                  {{ data.name }}
                </div>
                <div class="has-text-dark content-github">
                  {{ data.description }}
                </div>
                <div class="tags is-centered">
                  <div class="tag is-black">
                    <span>{{ data.language }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <h3 class="has-text-centered subtitle has-text-warning is-marginless">
          Rust
        </h3>
        <div class="tile is-ancestor columns is-centered has-text-centered">
          <div class="tile column is-vertical is-parent">
            <div
              v-if="rust.length == 0"
              class="tile is-child box has-background-warning"
            >
              <Loading />
            </div>

            <div
              v-else
              v-for="(data, i) in rust"
              :key="i"
              class="tile is-child box has-background-warning"
            >
              <a :href="data.url" rel="noreferrer dns-prefetch" target="_blank">
                <div class="title content-github">
                  {{ data.name }}
                </div>
                <div class="has-text-dark content-github">
                  {{ data.description }}
                </div>
                <div class="tags is-centered">
                  <div class="tag is-black">
                    <span>{{ data.language }}</span>
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
      javascript: [],
      haskell: [],
      rust: [],
      since: 'daily',
      isFetching: false
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
          this.isFetching = true
          const baseUrl = `https://github-trending-api.now.sh/repositories?since=${since}&spoken_language_code=en`
          const url = `${baseUrl}&language=${language}`

          const res = await fetch(url)
          const data = await res.json()

          this[language] = data.slice(0, 3)
          this.isFetching = false
        } catch (e) {
          this.isFetching = false
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
</style>
