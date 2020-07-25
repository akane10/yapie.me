<template>
  <div>
    <section>
      <div class="Site">
        <!-- Navbar -->
        <div class="Site-content">
          <div>
            <nav
              class="navbar is-fixed-top is-black is-hidden-touch"
              role="navigation"
              aria-label="main navigation"
            >
              <navbar />
            </nav>

            <nav
              class="navbar is-fixed-bottom is-black is-hidden-desktop"
              role="navigation"
              aria-label="main navigation"
            >
              <div
                class="navbar-menu is-active has-background-black"
                style="margin-bottom:0"
              >
                <!-- shown on mobile -->
                <nav class="level is-mobile columns is-centered">
                  <div class="level-item has-text-centered field column">
                    <div>
                      <nuxt-link
                        to="/about"
                        class="button is-warning is-outlined"
                      >
                        <span class="icon" style="padding:0 30px 0 30px">
                          <fa :icon="faLaughWink" style="font-size:30px" />
                        </span>
                      </nuxt-link>
                      <div class="is-size-7 has-text-warning">About</div>
                    </div>
                  </div>

                  <div class="level-item has-text-centered field column">
                    <div>
                      <nuxt-link to="/" class="button is-warning is-outlined">
                        <span class="icon" style="padding:0 30px 0 30px">
                          <fa :icon="faHome" style="font-size:30px" />
                        </span>
                      </nuxt-link>
                      <div class="is-size-7 has-text-warning">Home</div>
                    </div>
                  </div>

                  <div class="level-item has-text-centered field column">
                    <div>
                      <nuxt-link
                        to="/learning-resources"
                        class="button is-warning is-outlined"
                      >
                        <span class="icon" style="padding:0 30px 0 30px">
                          <fa :icon="faCode" style="font-size:30px" />
                        </span>
                      </nuxt-link>
                      <div class="is-size-7 has-text-warning">
                        Learning Resources
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </nav>
          </div>

          <!-- Page content will be inserted here  -->
          <nuxt />
        </div>

        <!-- Footer -->
        <thefooter />
      </div>
    </section>
  </div>
</template>

<script>
import { faLaughWink, faCode, faHome } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    navbar: () => import('../components/Navbar'),
    thefooter: () => import('../components/Footer')
  },
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
    }
  }
}
</script>

<style>
body {
  background-color: black;
}
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.Site-content {
  flex: 1;
}
.navbar {
  background-color: transparent;
  background-image: none;
}
</style>
