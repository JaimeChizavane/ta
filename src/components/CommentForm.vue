<template>
  <div class="blog-widget blog-comments-form mb-30">
    <h5 class="blog-widget__title">Leave A Reply</h5>
    <form>
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name:">
          </div><!-- /.form-group -->
        </div><!-- /.col-lg-6 -->
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email:">
          </div><!-- /.form-group -->
        </div><!-- /.col-lg-6 -->
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Website:">
          </div><!-- /.form-group -->
        </div><!-- /.col-lg-6 -->
        <div class="col-12">
          <div class="form-group">
            <textarea class="form-control" placeholder="Comment"></textarea>
          </div><!-- /.form-group -->
        </div><!-- /.col-lg-12 -->
        <div class="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap align-items-center">
          <button type="submit" class="btn btn__primary btn__icon justify-content-between btn__xl">
            <span>Submit Comment</span><i class="icon-arrow-right"></i>
          </button>
        </div><!-- /.col-lg-12 -->
      </div><!-- /.row -->
    </form>
  </div><!-- /.blog-comments-form -->
</template>

<script>
export default {
  name: "QCommentForm"
}
</script>

<style scoped>

</style>
