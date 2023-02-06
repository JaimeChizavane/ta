<template>
  <div class="container">
    <div class="row" v-if="menus.length">
      <div class="heading text-center col-12">
        <h4 class="heading__title">
          <router-link :to="{ name: 'home' }">
            {{ $tc('quick_access', 2) }}
          </router-link>
        </h4>
      </div>
    </div>
    <div class="list-group">
      <router-link
        v-for="(menu, index) in menus"
        :key="index"
        :to="{ name: menu.to }"
        class="list-group-item list-group-item-action btn btn__primary list-group-item-success mb-2"
      >
        {{ $t(menu.name) | upper }}
      </router-link>
    </div>
  </div>
</template>

<script>
import menus from '@/mocking_data/menu_quick.json';
export default {
  name: 'QuickMenu',
  data() {
    return {
      menus,
    };
  },
};
</script>

<style></style>
