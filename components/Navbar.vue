<template>
  <div class="container">
    <!-- Navbar Brand -->
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <span class="is-warning">
          <fa-layers class="fa-lg">
            <fa :icon="faHome" class="has-text-warning" />
          </fa-layers>
        </span>
      </nuxt-link>
    </div>

    <div id="navMenu" class="navbar-menu">
      <!-- Navbar End -->
      <div class="navbar-end">
        <span class="navbar-item">
          <nuxt-link
            :class="{ 'is-outlined': currentPath !== '/' }"
            to="/"
            class="button is-warning"
          >
            <span class="icon">
              <fa :icon="faHome" />
            </span>
            <span>Home</span>
          </nuxt-link>
        </span>
        <span class="navbar-item">
          <nuxt-link
            :class="{ 'is-outlined': currentPath !== '/about' }"
            to="/about"
            class="button is-warning"
          >
            <span class="icon">
              <fa :icon="faLaughWink" />
            </span>
            <span>About</span>
          </nuxt-link>
        </span>
        <span class="navbar-item">
          <nuxt-link
            :class="{ 'is-outlined': currentPath !== '/learning-resources' }"
            to="/learning-resources"
            class="button is-warning"
          >
            <span class="icon">
              <fa :icon="faCode" />
            </span>
            <span>Learning Resources</span>
          </nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { faLaughWink, faCode, faHome } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'Navbar',
  data() {
    return {}
  },
  computed: {
    faLaughWink() {
      return faLaughWink
    },
    faCode() {
      return faCode
    },
    faHome() {
      return faHome
    },
    currentPath() {
      return this.$nuxt.$route.path
    }
  }
}
</script>

<style scoped></style>
