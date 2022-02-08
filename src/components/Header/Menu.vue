<template>
  <div class="collapse navbar-collapse" id="mainNavigation">
    <ul class="navbar-nav ml-auto">
      <li class="nav__item" :class="[menu.sub_menus.length ? 'has-dropdown' : '']" v-for="(menu, index) in menus"
          :key="index">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link" @click.prevent
           v-if="menu.sub_menus.length"
           :class="[
               menu.sub_menus && menu.sub_menus.length && menu.sub_menus.find(sub => sub.to === $route.name)
               ? 'active'
               : ''
           ]"
        >
          {{ $t(menu.name) | upper }}
        </a>

        <router-link :to="{name: menu.to}" class="nav__item-link" active-class="active" :target="menu.blank ? '_blank' : null" v-else>
          {{ $t(menu.name) | upper }}
        </router-link>

        <ul class="dropdown-menu" v-show="menu.sub_menus && menu.sub_menus.length">
          <li class="nav__item" v-for="(sub, index) in menu.sub_menus" :key="'sub'+index"
              :class="[sub.sub_menus.length ? 'has-dropdown' : '']">
            <a v-if="sub.sub_menus.length" href="#" @click.prevent class="dropdown-toggle nav__item-link"
               data-toggle="dropdown">
              <span> {{ $t(sub.name) | upper }}</span>
            </a>

            <router-link :to="{name: sub.to}" class="nav__item-link" active-class="active" v-else>
              {{ $t(sub.name) | upper }}
            </router-link>

            <ul class="dropdown-submenu" v-show="sub.sub_menus && sub.sub_menus.length">
              <router-link v-for="(deep_sub, index) in sub.sub_menus" :key="'deepsub'+index"
                           :to="{name: deep_sub.to}" class=" nav__item-link " active-class="active"
              > {{ $t(deep_sub.name) | upper }}
              </router-link>
            </ul>
          </li><!-- /.nav-item -->
        </ul><!-- /.dropdown-menu -->
      </li><!-- /.nav-item -->
    </ul><!-- /.navbar-nav -->
    <button class="close-mobile-menu d-block d-lg-none"><i class="fas fa-times" @click="closeNavBar()"></i></button>
  </div><!-- /.navbar-collapse -->
</template>

<script>
import menus from '@/mocking_data/menu.json'

export default {
  name: "QMenu",
  methods: {
    closeNavBar() {
      document.getElementById("mainNavigation").classList.remove("menu-opened");
    }
  },
  data() {
    return {
      menus
    }
  }
}
</script>

<style scoped>
.sub_menu {
  left: 100px !important;
  background-color: #2e0606;
}
</style>
