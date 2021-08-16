<template>
  <header class="header header-transparent header-full">
    <nav class="navbar navbar-expand-lg sticky-navbar">
      <div class="container">
        <router-link class="navbar-brand" :to="{name : 'Home'}">
          <img src="assets/images/logo/logo-light.png" class="logo-light" alt="logo">
          <img src="assets/images/logo/logo-dark.png" class="logo-dark" alt="logo">
        </router-link>
        <button class="navbar-toggler" type="button">
          <span class="menu-lines"><span></span></span>
        </button>
        <div class="header__top-right">
          <ul class="list-unstyled d-flex justify-content-end align-items-center mb-0">
           <q-select-language/>
            <q-get-quote/>
          </ul>
        </div><!-- /.header-top-right -->
        <q-menu/>
        <q-search/>
      </div><!-- /.container -->
    </nav><!-- /.navabr -->
  </header><!-- /.Header -->
</template>

<script>
import QMenu from "@/components/Header/Menu";
import QSearch from "@/components/Header/Search";
import QGetQuote from "@/components/Header/GetQuote";
import QSelectLanguage from "@/components/Header/SelectLanguage";
export default {
  name: "QHeader",
  components: { QSelectLanguage, QGetQuote, QSearch, QMenu }
}
</script>

<style scoped>

</style>
