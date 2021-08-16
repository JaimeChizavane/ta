<template>
  <li>
    <div class="dropdown lang-dropdown">
      <button class="lang-dropdown-toggle" id="langDropdown" @click.prevent="changeLanguage">
        <i class="icon-map"></i><span>{{ activeLanguage.name }}</span>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "QSelectLanguage",
  mounted () {
    let active = window.localStorage.getItem('language')

    if (active) {
      this.activeLanguage = JSON.parse(active)
    } else {
      this.activeLanguage = this.languages[0]
    }
  },
  methods: {
    changeLanguage () {
      if (this.activeLanguage.order === this.languages.length - 1) {
        this.activeLanguage = this.languages[0]
      } else {
        this.activeLanguage = this.languages[this.activeLanguage.order + 1]
      }

      this.$i18n.locale = this.activeLanguage.locale

      this.$eventHub.$emit('language_changes', this.activeLanguage.locale)

      window.localStorage.setItem('language', JSON.stringify(this.activeLanguage))
    }
  },
  data() {
    return {
      activeLanguage: {},
      languages: [
        {
          flag: 'mz',
          name: 'PT',
          full_name: 'Português',
          locale: 'pt',
          order: 0
        },
        {
          flag: 'za',
          name: 'EN',
          full_name: 'English',
          locale: 'en',
          order: 1
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
