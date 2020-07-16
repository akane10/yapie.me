<template>
  <div>
    <section>
      <div class="Site">
        <!-- Navbar -->
        <div class="Site-content">
          <div>
            <nav
              class="navbar is-fixed-top is-black"
              role="navigation"
              aria-label="main navigation"
            >
              <navbar />
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
import navbar from '../components/Navbar'
import thefooter from '../components/Footer'
export default {
  components: {
    navbar,
    thefooter
  },
  data() {
    return {}
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
