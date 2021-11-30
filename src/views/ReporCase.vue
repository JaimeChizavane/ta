<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <q-contact/>
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";
import QContact from "@/components/Contact";

export default {
  name: "QHistory",
  components: { QContact, QBreadCrumb, QHeader, QFooter },
  data() {
    return {
    }
  },
  mounted() {
    window.mainExecution()
  }
}
</script>

<style scoped>

</style>
