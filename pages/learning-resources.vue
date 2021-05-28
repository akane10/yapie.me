<template>
  <div id="body">
    <section class="section">
      <div class="container">
        <div id="top" class="has-text-centered has-text-warning">
          <h1 class="title has-text-warning">
            &lt;/Learning Resources&gt;
          </h1>
          <p id="des">
            Free learning resource about programming and computer science
          </p>
        </div>
      </div>
    </section>

    <section id="content-section" class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="tile is-ancestor columns is-centered has-text-centered">
              <div class="tile column is-10-desktop is-vertical is-parent ">
                <div
                  v-for="resource in activeResources"
                  :key="resource.id"
                  class="tile is-child box has-background-warning"
                >
                  <a :href="resource.link" rel="noreferrer" target="_blank">
                    <div class="title the-content">
                      {{ resource.name }}
                    </div>
                    <div class="has-text-dark the-content">
                      {{ resource.description }}
                    </div>
                    <div class="tags is-centered">
                      <div
                        v-for="(tag, i) in resource.tags"
                        :key="i"
                        class="tag is-black"
                      >
                        <span> {{ tag }}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <!-- Tags -->
            <div class="columns is-centered">
              <div class="column is-8-desktop">
                <p class="has-text-warning has-text-centered is-size-5">
                  All Resources: {{ allResources.length }} | Selected:
                  {{ activeResources.length }}
                </p>

                <!-- Filter by title -->
                <div class="field">
                  <div class="control">
                    <input
                      v-model="s"
                      class="input is-warning"
                      type="text"
                      placeholder="Filter by title"
                    />
                  </div>
                </div>
                <!-- Select All -->
                <div
                  class="field is-grouped is-grouped-multiline is-grouped-centered"
                >
                  <span class="control">
                    <a
                      @click="selectAllTags(false)"
                      v-if="isAllTagsSelected"
                      class="button"
                    >
                      <div>Unselect All</div>
                    </a>
                    <a @click="selectAllTags(true)" v-else class="button">
                      <div>Select All</div>
                    </a>
                  </span>
                </div>

                <!-- Tags -->
                <div
                  class="field is-grouped is-grouped-multiline is-grouped-centered"
                >
                  <span v-for="(tag, i) in allTags" :key="i" class="control">
                    <span
                      @click="selectTag(tag)"
                      :class="{ 'is-selected': isTagSelected(tag) }"
                      class="button"
                    >
                      <div>{{ tag }}</div>
                    </span>
                    <!-- <NuxtLink -->
                    <!-- class="button" -->
                    <!-- :class="{ 'is-selected': isTagSelected(tag) }" -->
                    <!-- :to="'/learning-resources?' + setUrl(tag)" -->
                    <!-- > -->
                    <!-- {{ tag }} -->
                    <!-- </NuxtLink> -->
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { data } from '../data'

export default {
  name: 'LearningResources',
  layout: 'main',
  head() {
    return {
      title: '</Learning Resources>',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          name: 'LearningResources',
          content: '</Learning Resources> - Yapie Rosyadie'
        },
        {
          hid: 'og-type',
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  },
  data() {
    return {
      s: '',
      activeTags: [],
      allResources: [...data].reverse()
    }
  },
  computed: {
    activeResources() {
      const { activeTags, allResources, s } = this

      const is = (tag) => (data) => {
        if (data.tags.includes(tag)) {
          return data
        } else {
          return null
        }
      } // ap :: [a -> b] -> [a] -> [b]
      const ap = (fns) => (xs) =>
        fns.reduce((acc, fn) => acc.concat(xs.map(fn)), [])
      // lift :: (a -> b -> c) -> [a] -> [b] -> [c]
      const lift = (fn) => (a) => (b) => ap(a.map(fn))(b)
      const res = lift(is)(activeTags)(allResources).filter(Boolean)

      const results = res.filter((i) =>
        i.name.toLowerCase().includes(s.toLowerCase())
      )

      this.removeUnknownTags()
      this.router()
      return [...new Set(results)]
    },
    allTags() {
      return [
        ...new Set(
          this.allResources.flatMap((i) => i.tags.map((ii) => ii.toLowerCase()))
        )
      ]
    },
    isAllTagsSelected() {
      return this.activeTags.length === this.allTags.length
    }
  },
  mounted() {
    const { s, tags } = this.$nuxt.$route.query

    if (s) {
      this.s = s.toLowerCase()
    }

    if (tags) {
      this.activeTags = tags.toLowerCase().split(',')
    } else {
      this.activeTags = this.allTags
    }
    this.removeUnknownTags()
    this.router()
  },
  methods: {
    router() {
      if (this.activeTags.length === 0) {
        this.$router.push({
          path: this.$route.path
        })
      } else {
        this.$router.push({
          path: this.$route.path,
          query: { tags: this.activeTags.toString() }
        })
      }
    },
    removeUnknownTags() {
      this.activeTags = this.activeTags.filter(
        (i) => !!this.allTags.find((ii) => ii === i)
      )
    },
    isTagSelected(tag) {
      return !!this.activeTags.find((i) => i === tag)
    },
    selectTag(tag) {
      if (this.isTagSelected(tag)) {
        this.activeTags = this.activeTags.filter((i) => i !== tag)
      } else {
        this.activeTags.push(tag)
      }

      this.removeUnknownTags()
      this.router()
    },
    selectAllTags(bool) {
      if (bool) {
        this.activeTags = this.allTags
      } else {
        this.activeTags = []
      }
      this.router()
    }
  }
}
</script>

<style scoped>
#body {
  min-height: 100vh;
}
.is-selected {
  background-color: #ffdd57;
}
@media (max-width: 768px) {
  .columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
#top {
  margin-top: 30px;
}
#des {
  font-size: 20px;
  margin-top: 30px;
}
#content-section {
  margin-bottom: 35px;
  padding-top: 0;
}
.the-content {
  margin-bottom: 7px;
}
</style>
