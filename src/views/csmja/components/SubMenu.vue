<template>
  <section class="secondary-nav sticky-top py-0 bg__primary">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul class="nav nav-tabs justify-content-center ">
            <li class="nav-item btn__primary" v-for="(menu, index) in menus" :key="index">
              <a
                v-if="menu.sub_menus.length"
                href="#"
                @click.prevent
                class="dropdown-toggle nav-link btn__primary"
                data-toggle="dropdown"
              >
                <span> {{ $t(menu.name) | upper }}</span>
              </a>
              <router-link
                class="nav-link btn__primary"
                :active-class="'active'"
                :to="{ name: menu.to }"
                v-else
              >
                {{ $tc(menu.name) }}
              </router-link>
              <ul
                class="dropdown-menu btn__primary"
                v-show="menu.sub_menus && menu.sub_menus.length"
              >
                <li
                  class="dropdown-item"
                  v-for="(sub, index) in menu.sub_menus"
                  :key="'sub' + index"
                  :class="[sub.sub_menus.length ? 'has-dropdown' : '']"
                >
                  <router-link
                    class="nav-link bg__primary"
                    :active-class="'active'"
                    :to="{ name: sub.to }"
                  >
                    {{ $tc(sub.name) }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.col-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.Secondary Nav -->
</template>

<script>
import menus from "@/mocking_data/csmja.json";

export default {
  name: "SubMenu",
  data() {
    return {
      menus,
    };
  },
};
</script>

<style scoped></style>
