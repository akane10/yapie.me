<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div>
        <a
          href="https://github.com/akane10"
          target="_blank"
          class="sm has-text-light"
        >
          <fa :icon="faGithub" />
        </a>
        <a
          href="https://gitlab.com/akane10"
          target="_blank"
          class="sm has-text-light"
        >
          <fa :icon="faGitlab" />
        </a>
        <a
          href="https://twitter.com/akane10_"
          target="_blank"
          class="sm has-text-light"
        >
          <fa :icon="faTwitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/yapie-rosyadie"
          target="_blank"
          class="sm has-text-light"
        >
          <fa :icon="faLinkedin" />
        </a>
      </div>
      <div class="block">
        <h4 class="has-text-light has-text-warning">Yapie Rosyadie</h4>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  faGithub,
  faGitlab,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'Footer',
  computed: {
    faGithub() {
      return faGithub
    },
    faGitlab() {
      return faGitlab
    },
    faTwitter() {
      return faTwitter
    },
    faLinkedin() {
      return faLinkedin
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #222831;
}
.sm {
  margin: 10px;
  font-size: 26px;
  /* color: hsl(48, 100%, 60%); */
}
</style>
