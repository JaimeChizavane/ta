<template>
  <div class="wrapper">
<!--    <div class="preloader">-->
<!--      <div class="loading"><span></span><span></span><span></span><span></span></div>-->
<!--    </div>&lt;!&ndash; /.preloader &ndash;&gt;-->
    <q-header/>
    <router-view/>
<q-footer/>
  </div>
</template>

<script>
import QHeader from "@/components/Header/Header";
import QFooter from "@/components/Footer";
export default {
  name: 'App',
  components: { QFooter, QHeader }
}
</script>
