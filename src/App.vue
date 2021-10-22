<template>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
  mounted() {
    document.getElementById('preloader').style.display = 'none'
  }
}
</script>
