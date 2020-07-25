<template>
  <div class="container">
    <h3
      class="has-text-centered title has-text-warning"
      style="margin-bottom:5px"
    >
      Github Trending {{ what }}
    </h3>
    <div class="field ">
      <div class="control has-text-centered">
        <div
          :class="{ 'is-loading': isFetching }"
          class="select is-warning is-small "
        >
          <select
            v-model="since"
            @change="changeSince"
            class="has-background-black has-text-warning"
          >
            <option>daily</option>
            <option>weekly</option>
            <option>monthly</option>
          </select>
        </div>
      </div>
    </div>
    <div class="columns is-centered is-multiline is-desktop">
      <div class="column">
        <h3
          class="has-text-centered subtitle has-text-warning"
          style="margin-bottom:0"
        >
          Javascript
        </h3>
        <div class="tile is-ancestor columns is-centered has-text-centered">
          <div class="tile column is-vertical is-parent ">
            <div
              v-for="(data, i) in javascript"
              :key="i"
              class="tile is-child box has-background-warning"
            >
              <a :href="data.url" rel="noreferrer dns-prefetch" target="_blank">
                <div class="title" style="margin-bottom:10px;font-size:1rem">
                  {{ data.name }}
                </div>
                <div
                  class="has-text-dark"
                  style="margin-bottom:10px;font-size:1rem"
                >
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
        <h3
          class="has-text-centered subtitle has-text-warning"
          style="margin-bottom:0"
        >
          Haskell
        </h3>
        <div class="tile is-ancestor columns is-centered has-text-centered">
          <div class="tile column  is-vertical is-parent ">
            <div
              v-for="(data, i) in haskell"
              :key="i"
              class="tile is-child box has-background-warning"
            >
              <a :href="data.url" rel="noreferrer dns-prefetch" target="_blank">
                <div class="title" style="margin-bottom:10px;font-size:1rem">
                  {{ data.name }}
                </div>
                <div
                  class="has-text-dark"
                  style="margin-bottom:10px;font-size:1rem"
                >
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
        <h3
          class="has-text-centered subtitle has-text-warning"
          style="margin-bottom:0"
        >
          Rust
        </h3>
        <div class="tile is-ancestor columns is-centered has-text-centered">
          <div class="tile column is-vertical is-parent ">
            <div
              v-for="(data, i) in rust"
              :key="i"
              class="tile is-child box has-background-warning"
            >
              <a :href="data.url" rel="noreferrer dns-prefetch" target="_blank">
                <div class="title" style="margin-bottom:10px;font-size:1rem">
                  {{ data.name }}
                </div>
                <div
                  class="has-text-dark"
                  style="margin-bottom:10px;font-size:1rem"
                >
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

<style></style>
