<template>
	<section class="blog blog-single pt-0 pb-80 mt-40">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-8">
					<div class="post-item mb-0">
						<div class="post__img">
							<router-link :to="{ name: '' }">
								<img v-lazy="getImageUrl(item)" alt="blog image" />
							</router-link>
						</div>
						<!-- /.post-img -->
						<div class="post__meta d-flex align-items-center mb-20">
							<span class="post__meta-date">{{
								item.Data_x0020_Noticia || item.Created | date_with_week
							}}</span>
						</div>
						<!-- /.blog-meta -->
						<h1 class="post__title mb-30">
							{{ item.Title }}
						</h1>
						<div class="post__desc" v-html="item.Content"></div>
						<!-- /.blog-desc -->
					</div>
					<!-- /.post-item -->
					<div class="bordered-box mb-40 mt-40">
						<div class="row row-no-gutter">
							<div class="col-sm-12 col-md-12 col-lg-12">
								<div class="blog-share d-flex flex-wrap justify-content-end">
									<strong class="mr-20 color-heading">Partilhar</strong>
									<ul
										class="list-unstyled social-icons social-icons-primary d-flex mb-0"
									>
										<li>
											<a
												target="_blank"
												:href="
													'https://www.facebook.com/sharer/sharer.php?u=' +
														getCurrentUrl() +
														'&picture=' +
														getImageUrl(item) +
														'&title=' +
														item.Title +
														'&description=' +
														item.Title
												"
												><i class="fab fa-facebook-f"></i
											></a>
										</li>
										<li>
											<a
												target="_blank"
												:href="
													'https://twitter.com/share?text=' +
														item.Title +
														'&url=' +
														getCurrentUrl()
												"
												><i class="fab fa-twitter"></i
											></a>
										</li>
									</ul>
								</div>
								<!-- /.blog-share -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /.row -->
		</div>
		<!-- /.container -->
	</section>
	<!-- /.blog Single -->
</template>

<script>
export default {
	name: 'QItemInstitution',

	methods: {
		getImageUrl(item) {
			return item && item.Attachments
				? process.env.VUE_APP_ROOT_DOCS +
						item.AttachmentFiles.results[0].ServerRelativeUrl
				: 'assets/images/blog/grid/1.jpg';
		},
		getCurrentUrl() {
			// return 'https://ekutivasolutions.com'
			return window.location.href;
		},
	},
	props: {
		item: {
			type: Object,
		},
		routeName: {
			type: String,
			default: 'institution-item',
		},
	},
};
</script>

<style scoped></style>
