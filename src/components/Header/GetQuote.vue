<template>
  <li>
    <ul class="navbar-actions list-unstyled mb-0 d-flex align-items-center">
      <li class="d-none d-xl-block">
        <a href="#" class="btn action__btn-contact">Submeta a sua consulta</a>
      </li>
      <li>
        <button class="action__btn action__btn-login open-login-popup">
          <i class="icon-user"></i><span>{{ $tc('Entrar') }}</span>
        </button>
      </li>
    </ul><!-- /.navbar-actions -->
  </li>
</template>

<script>
export default {
  name: "QGetQuote"
}
</script>

<style scoped>

</style>
