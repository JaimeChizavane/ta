<template>
  <header class="header header-transparent header-full">
    <nav class="navbar navbar-expand-lg sticky-navbar">
      <router-link
        class="navbar-brand"
        :to="{ name: 'home' }"
        style="margin-left:15px; right:10px"
      >
        <img
          src="assets/images/logo/logo.png"
          class="logo-light logo-lighte d-flex align-items-center mb-2 mb-lg-0 pull-right"
          alt="logo"
        />
      </router-link>
      <div class="container">
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
        <!-- <li class="d-none d-xl-block">

         </li> -->
      </div>
      <li class="d-none d-xl-block">
        <router-link
          class="navbar-bran"
          :to="{ name: 'home' }"
          style="margin-right:15px; right:10px"
        >
          <img
            src="assets/images/logo/Logotipo.jpg"
            class="d-flex align-items-center mb-2 mb-lg-0 pull-right"
            alt="logo"
          />
        </router-link>
      </li>

      <!-- /.container -->
    </nav>

    <!-- /.navabr -->
  </header>

  <!-- /.Header -->
</template>

<script>
import QMenu from '@/components/Header/Menu';
import QSearch from '@/components/Header/Search';
import QGetQuote from '@/components/Header/GetQuote';
//import QSelectLanguage from "@/components/Header/SelectLanguage";

export default {
  name: 'QHeader',
  // components: { QSelectLanguage, QGetQuote, QSearch, QMenu },
  components: { QGetQuote, QSearch, QMenu },
  methods: {
    openMenu() {
      document.getElementById('mainNavigation').classList.add('menu-opened');
    },
  },
};
</script>

<style scoped></style>
