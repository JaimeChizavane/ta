<template>
	<section class="blog blog-single pt-0 pb-80 mt-40">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-12 col-xl-5">
					<div class="about__img mb-40 sticky-top">
						<img
							:src="getImageUrl(item)"
							alt="blog image"
							class="cover__image"
						/>
						<blockquote class="blockquote mb-0">
							<h4 class="blockquote__title">{{ item.Title }}</h4>
						</blockquote>
					</div>
					<!-- /.about-img -->
				</div>
				<!-- /.col-xl-5 -->
				<div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
					<!-- <div class="heading-layout2 mb-40">
              <h3 class="heading__title">{{ history.Title }}</h3>
            </div> /heading -->
					<div class="about-text-wrapper">
						<div class="about__Text">
							<p class="font-weight-bold mb-30" v-html="item.Content"></p>
						</div>
					</div>
				</div>
				<!-- /.col-xl-7 -->
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
			<!-- /.row -->

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
				: 'assets/images/about/1.jpg';
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
