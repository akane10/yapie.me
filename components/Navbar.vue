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
      <a
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
        role="button"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
        class="navbar-burger has-text-warning"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navMenu"
      :class="{ 'is-active': showNav, 'has-background-black-bis': showNav }"
      class="navbar-menu"
    >
      <!-- Navbar End -->
      <div class="navbar-end">
        <span class="navbar-item">
          <nuxt-link to="/" class="button is-warning is-outlined">
            <span class="icon">
              <fa :icon="faHome" />
            </span>
            <span>Home</span>
          </nuxt-link>
        </span>
        <span class="navbar-item">
          <nuxt-link to="/about" class="button is-warning is-outlined">
            <span class="icon">
              <fa :icon="faLaughWink" />
            </span>
            <span>About</span>
          </nuxt-link>
        </span>
        <span class="navbar-item">
          <nuxt-link
            to="/learning-resources"
            class="button is-warning is-outlined"
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
    return {
      showNav: false,
      onHover: false
    }
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
    }
  }
}
</script>

<style scoped>
.home {
  font-size: 30px;
}
</style>
