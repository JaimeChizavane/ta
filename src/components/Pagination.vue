<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12 text-center">
      <nav class="pagination-area">
        <ul class="pagination justify-content-center">
          <li><a href="#" @click.prevent="goTo(meta.current_page - 1)" :class="{'disabled' : !meta.prev_page}"><i
              class="icon-arrow-left-2"></i></a>
          </li>
          <li><a href="#" class="disabled">{{ meta.current_page }}</a></li>
          <li><a href="#" @click.prevent="goTo(meta.current_page + 1)" :class="{'disabled' : !meta.next_page}"><i
              class="icon-arrow-right-2"></i></a>
          </li>
        </ul>
      </nav><!-- .pagination-area -->
    </div><!-- /.col-lg-12 -->
  </div><!-- /.row -->
</template>

<script>
export default {
  name: "QPagination",
  props: ['meta'],
  methods: {
    goTo(page) {
      this.$eventHub.$emit('navigate', page)
    }
  }
}
</script>

<style>
.pagination li a.disabled {
  border-color: #d7d7d7;
  color: #d7d7d7;
  background: transparent;
  pointer-events: none;
}
</style>
