<template>
  <div class="blog-comments mb-70">
    <h5 class="blog-widget__title">2 comments</h5>
    <ul class="comments-list list-unstyled">
      <li class="comment__item">
        <div class="comment__avatar">
          <img src="assets/images/blog/author/2.jpg" alt="avatar">
        </div>
        <div class="comment__content">
          <h5 class="comment__author">Richard Muldoone</h5>
          <span class="comment__date">Feb 28, 2017 - 08:07 pm</span>
          <p class="comment__desc">The example about the mattress sizing page you mentioned in the last WBF
            can be a perfect example
            of new keywords and content, and broadening the funnel as well. I can only imagine the sale
            numbers if that was the site of a mattress selling company.</p>
          <a class="comment__reply" href="#">reply</a>
        </div>
        <ul class="nested__comment list-unstyled">
          <li class="comment__item">
            <div class="comment__avatar">
              <img src="assets/images/blog/author/3.jpg" alt="avatar">
            </div>
            <div class="comment__content">
              <h5 class="comment__author">Mike Dooley</h5>
              <span class="comment__date">Feb 28, 2017 - 08:22 pm</span>
              <p class="comment__desc">The example about the mattress sizing page you mentioned in the last
                WBF can be a perfect
                example of new keywords and content, and broadening the funnel as well. I can only imagine the
                sale numbers if that was the site of a mattress selling company.</p>
              <a class="comment__reply" href="#">reply</a>
            </div>
          </li><!-- /.comment -->
        </ul><!-- /.nested-comment -->
      </li><!-- /.comment -->
    </ul><!-- /.comments-list -->
  </div><!-- /.blog-comments -->
</template>

<script>
export default {
  name: "QComments"
}
</script>

<style scoped>

</style>
