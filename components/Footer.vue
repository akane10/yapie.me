<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div>
        <a
          rel="noreferrer"
          href="https://github.com/akane10"
          target="_blank"
          class="sm has-text-success"
        >
          <fa :icon="faGithub" />
        </a>
        <a
          rel="noreferrer"
          href="https://gitlab.com/akane10"
          target="_blank"
          class="sm has-text-success"
        >
          <fa :icon="faGitlab" />
        </a>
        <a
          rel="noreferrer"
          href="https://twitter.com/akane10_"
          target="_blank"
          class="sm has-text-success"
        >
          <fa :icon="faTwitter" />
        </a>
      </div>
      <div class="block">
        <h4 class="has-text-warning">Yapie Rosyadie</h4>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  faGithub,
  faGitlab,
  faTwitter
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
