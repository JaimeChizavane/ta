<template>
  <section class="secondary-nav sticky-top py-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="nav nav-tabs justify-content-center">
            <router-link :key="index" class="nav__link" :active-class="'active'" v-for="(menu, index) in menus" :to="{name:menu.to}">
              {{ $tc(menu.name) }}
            </router-link>
          </nav>
        </div><!-- /.col-12 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /.Secondary Nav -->
</template>

<script>
import menus from '@/mocking_data/csmja.json'

export default {
  name: "SubMenu",
  data() {
    return {
      menus
    }
  }
}
</script>

<style scoped>

</style>
