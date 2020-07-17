<template>
  <div id="body">
    <section class="section">
      <div class="container">
        <div
          style="margin-top:30px;"
          class="has-text-centered has-text-warning"
        >
          <h1 class="title has-text-warning">
            &lt;Learning Resources/&gt;
          </h1>
          <p style="font-size:20px; margin-top:30px">
            Free learning resource about programming and computer science
          </p>
        </div>
      </div>
    </section>

    <section class="section" style="margin-bottom:35px; padding-top:0;">
      <div class="columns">
        <div class="column">
          <div class="tile is-ancestor columns is-centered has-text-centered">
            <div class="tile column is-10-desktop is-vertical is-parent ">
              <div
                v-for="resource in resources"
                :key="resource.id"
                class="tile is-child box has-background-warning"
              >
                <span :to="resource.link">
                  <div class="title" style="margin-bottom:10px">
                    {{ resource.name }}
                  </div>
                </span>
                <div style="margin-bottom:10px;">
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
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <!-- Tags -->
          <div class="columns is-centered">
            <div class="column is-8-desktop">
              <!-- Filter by title -->
              <div class="field">
                <div class="control">
                  <input
                    @change="filter"
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
                <span v-for="(tag, i) in tags" :key="i" class="control">
                  <span
                    @click="selectTag(i)"
                    :class="{ 'is-selected': tag.isSelected }"
                    class="button"
                  >
                    <div>{{ tag.name }}</div>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LearningResources',
  head() {
    return {
      title: '</Learning Resources>',
      meta: [
        {
          hid: 'learning resource',
          property: 'learning resource',
          name: 'learning resource',
          content:
            'Free learning resource about programming and computer science'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'free, learning, resource, programming, computer science, youtube, ebook'
        }
      ]
    }
  },
  computed: {
    allResources() {
      return this.$store.state.learningResources.allResources
    },
    resources() {
      return this.$store.state.learningResources.resources
    },
    tags() {
      return this.$store.state.learningResources.tags
    },
    isAllTagsSelected() {
      const x = this.tags.filter((i) => i.isSelected).length
      const y = this.tags.length
      return x === y
    }
  },
  mounted() {
    const allResources = this.allResources
    this.$store.commit('learningResources/setTags', allResources)

    const randomNumber = Math.floor(Math.random() * this.tags.length)
    this.selectTag(randomNumber)
  },
  methods: {
    selectTag(i) {
      this.$store.commit('learningResources/selectTag', i)

      const tags = this.tags.filter((i) => i.isSelected).map((i) => i.name)
      const data = this.allResources
      this.$store.commit('learningResources/setResources', { tags, data })
    },
    selectAllTags(bool) {
      this.$store.commit('learningResources/selectAllTags', bool)

      const tags = this.tags.filter((i) => i.isSelected).map((i) => i.name)
      const data = this.allResources
      this.$store.commit('learningResources/setResources', { tags, data })
    },
    filter(e) {
      const { value } = e.target
      this.$store.commit('learningResources/filterResources', value)
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
</style>
