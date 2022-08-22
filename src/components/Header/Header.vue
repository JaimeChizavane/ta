<template>
  <header class="header header-transparent header-full">
    <nav class="navbar navbar-expand-lg sticky-navbar">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }" style="margin-right:15px">
          <img
            src="assets/images/logo/logo.png"
            class="logo-light"
            alt="logo"
            style="max-height: 100px;"
          />
          <!-- <img src="assets/images/logo/logo-dark.png" class="logo-dark" alt="logo"> -->
        </router-link>
        <button class="navbar-toggler" type="button" @click="openMenu()">
          <span class="menu-lines"><span></span></span>
        </button>
        <div class="header__top-right">
          <ul
            class="list-unstyled d-flex justify-content-end align-items-center mb-0"
          >
            <!--            <q-select-language/>-->
            <q-get-quote />
          </ul>
        </div>
        <!-- /.header-top-right -->
        <q-menu />
        <q-search />
        <li class="d-none d-xl-block"></li>
        <router-link class="navbar-brand" :to="{ name: 'home' }" style="margin-left:15px">
          <img
            src="assets/images/logo/Logotipo.jpg"
            class="logo-light"
            alt="logo"
            style="max-height: 100px;"
          />
        </router-link>
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navabr -->
  </header>
  <!-- /.Header -->
</template>

<script>
import QMenu from "@/components/Header/Menu";
import QSearch from "@/components/Header/Search";
import QGetQuote from "@/components/Header/GetQuote";
//import QSelectLanguage from "@/components/Header/SelectLanguage";

export default {
  name: "QHeader",
  // components: { QSelectLanguage, QGetQuote, QSearch, QMenu },
  components: { QGetQuote, QSearch, QMenu },
  methods: {
    openMenu() {
      document.getElementById("mainNavigation").classList.add("menu-opened");
    },
  },
};
</script>

<style scoped></style>
