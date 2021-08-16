<template>
  <div class="collapse navbar-collapse" id="mainNavigation">
    <ul class="navbar-nav ml-auto">
      <li class="nav__item has-dropdown" v-for="(menu, index) in menus" :key="index">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle nav__item-link" @click.prevent
           :class="[
               menu.sub_menus && menu.sub_menus.length && menu.sub_menus.find(sub => sub.name === $route.name)
               ? 'active'
               : ''
           ]"
        >
          {{ $t(menu.name) | upper }}
        </a>
        <ul class="dropdown-menu" v-show="menu.sub_menus && menu.sub_menus.length">
          <li class="nav__item" v-for="(sub, index) in menu.sub_menus" :key="'sub'+index">
            <router-link :to="{name: sub.to}" class="nav__item-link">
              {{ $t(sub.name) | upper }}
            </router-link>
          </li><!-- /.nav-item -->
        </ul><!-- /.dropdown-menu -->
      </li><!-- /.nav-item -->
    </ul><!-- /.navbar-nav -->
    <button class="close-mobile-menu d-block d-lg-none"><i class="fas fa-times"></i></button>
  </div><!-- /.navbar-collapse -->
</template>

<script>
import menus from '@/mocking_data/menu.json'

export default {
  name: "QMenu",
  data() {
    return {
      menus
    }
  }
}
</script>

<style scoped>

</style>
