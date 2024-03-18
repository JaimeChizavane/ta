<template>
	<div class="wrapper">
		<q-header />
		<q-bread-crumb />

		<section class="portfolio-grid">
			<div class="container" v-if="items.length">
				<div class="row">
					<div class="col-12">
						<div class="pagetitle__form mb-50">
							<div class="form-row">
								<div class="col-12">
									<input
										@keyup="search"
										v-model="query.assunto"
										type="text"
										class="form-control bordered-box mb-20"
										placeholder="Procurar por assunto..."
									/>
								</div>
							</div>
						</div>
					</div>
					<!-- /.col-xl-6 -->
				</div>
				<div class="row mb-50" v-if="filtered.length">
					<div class="col-12">
						<div class="heading text-center mb-50">
							<h2 class="heading__subtitle color-body">
								Resultados encontrados:
							</h2>
						</div>
						<div class="row">
							<div
								class="col-sm-3 col-md-3 col-lg-2"
								v-for="(file, index) in filtered"
								:key="index"
							>
								<div class="portfolio-item">
									<div class="portfolio__img" @click="zoomImage(file.File)">
										<img v-lazy="getFileThumb(file.File)" alt="portfolio img" />
									</div>
									<!-- /.portfolio-img -->
									<div class="portfolio__content">
										<h4 class="portfolio__title">
											<a
												:href="getFileUrl(file.File)"
												target="_blank"
												v-html="file.File.Name"
											></a>
										</h4>
										<div class="portfolio__cat">
											<a :href="getFileUrl(file.File)" target="_blank">{{
												file.Tipo
											}}</a>
										</div>
										<!-- /.portfolio-cat -->

										<div class="portfolio__cat">
											<a
												class="btn btn__secondary btn__link"
												:href="getFileUrl(file.File)"
												target="_blank"
											>
												<span>{{ $tc('read_more') }}</span>
												<i class="icon-arrow-right"></i>
											</a>
										</div>
										<!-- /.portfolio-cat -->
									</div>
									<!-- /.portfolio-content -->
								</div>
								<!-- /.portfolio-item -->
							</div>
							<!-- /.col-lg-4 -->
						</div>
					</div>
					<!-- /.col-lg-12 -->
				</div>
				<!-- /.row -->

				<!--        <div class="row">-->
				<!--          <div class="col-12">-->
				<!--            <ul class="portfolio-filter d-flex flex-wrap justify-content-center list-unstyled">-->
				<!--              <li><a class="filter" :class="[activeFilter ? '':'active']" href="#"-->
				<!--                     @click.prevent="filterImages(null)">Todas</a></li>-->
				<!--              <li v-for="(filter, index) in allItems" :key="index">-->
				<!--                <a class="filter" :class="[activeFilter === filter.Tipo ? 'active':'']" href="#"-->
				<!--                   @click.prevent="filterImages(filter.Tipo)">{{ filter.Title || filter.Tipo }}</a>-->
				<!--              </li>-->
				<!--            </ul>&lt;!&ndash; /.portfolio-filter  &ndash;&gt;-->
				<!--          </div>&lt;!&ndash; /.col-lg-12 &ndash;&gt;-->
				<!--        </div>&lt;!&ndash; /.row &ndash;&gt;-->
				<div class="container">
					<div class="row" id="accordion">
						<div class="col-sm-12 col-md-12 col-lg-12">
							<div
								class="accordion-item"
								v-for="(filter, index) in allItems"
								:key="index"
							>
								<div
									class="accordion__header"
									data-toggle="collapse"
									:data-target="'#collapse' + index"
								>
									<a class="accordion__title" @click.prevent>{{
										filter.Title || filter.Tipo
									}}</a>
								</div>
								<!-- /.accordion-item-header -->
								<div
									:id="'collapse' + index"
									class="collapse"
									data-parent="#accordion"
								>
									<div class="accordion__body">
										<div
											class="row"
											v-for="(item, index) in items.filter(
												(i) => i.Tipo === filter.Tipo
											)"
											:key="index"
										>
											<!-- portfolio item #1 -->
											<div
												class="col-sm-4 col-md-4 col-lg-3"
												v-for="file in item.Folder.Files.results"
												:key="file.UniqueId"
											>
												<div class="portfolio-item">
													<div class="portfolio__img" @click="zoomImage(file)">
														<img
															v-lazy="getFileThumb(file)"
															alt="portfolio img"
														/>
													</div>
													<!-- /.portfolio-img -->
													<div class="portfolio__content">
														<h4 class="portfolio__title">
															<a
																:href="getFileUrl(file)"
																target="_blank"
																v-html="file.Name"
															></a>
														</h4>
														<div class="portfolio__cat">
															<a :href="getFileUrl(file)" target="_blank"
																><i class="icon-download"></i>
																{{ item.Folder.Name }}</a
															>
														</div>
														<!-- /.portfolio-cat -->
														<div class="portfolio__cat">
															<a
																class="btn btn__secondary btn__link"
																:href="getFileUrl(file)"
																target="_blank"
															>
																<span>{{ $tc('read_more') }}</span>
																<i class="icon-arrow-right"></i>
															</a>
														</div>
														<!-- /.portfolio-cat -->
													</div>
													<!-- /.portfolio-content -->
												</div>
												<!-- /.portfolio-item -->
											</div>
											<!-- /.col-lg-4 -->
										</div>
										<!-- /.row -->
									</div>
									<!-- /.accordion-item-body -->
								</div>
							</div>
						</div>
						<!-- /.col-lg-6 -->
					</div>
					<!-- /.row -->
				</div>
				<!-- /.container -->
			</div>
			<!-- /.container -->
			<div class="container" v-else>
				<div class="heading text-center mb-20">
					<h3 class="heading__title">Sem resultados...</h3>
				</div>
			</div>
		</section>
		<!-- /.portfolio layout 3  -->
		<q-footer />
		<CoolLightBox :items="slideImages" :index="index" @close="index = null">
		</CoolLightBox>
	</div>
</template>

<script>
import QFooter from '@/components/Footer';
import QHeader from '@/components/Header/Header';
import QBreadCrumb from '@/components/BreadCrumb';

import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

export default {
	name: 'QPublications',
	components: { QBreadCrumb, QHeader, QFooter, CoolLightBox },
	methods: {
		search() {
			if (this.query.assunto) {
				this.filtered = this.searcheable
					.filter(
						(file) =>
							this.query.assunto === '' ||
							file.File.Name?.toLowerCase().includes(
								this.query.assunto.toLowerCase()
							) ||
							file.Tipo?.toLowerCase().includes(
								this.query.assunto.toLowerCase()
							) ||
							file.Title?.toLowerCase().includes(
								this.query.assunto.toLowerCase()
							)
					)
					.slice(0, 10);
			} else {
				this.filtered = [];
			}
		},
		getFileUrl(item) {
			return item && item.ServerRelativeUrl
				? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl
				: '#';
		},
		getFileThumb(item) {
			return item && item.ServerRelativeUrl
				? process.env.VUE_APP_ROOT_DOCS +
						'/thumbs/' +
						item.ServerRelativeUrl +
						'.png'
				: '#';
		},
		zoomImage(file) {
			this.slideImages = [
				{
					src: this.getFileThumb(file),
					description: file.Name,
				},
			];
			this.index = 0;
		},
		filterImages(name = null) {
			this.activeFilter = name;

			if (name) {
				this.items = this.allItems.filter((i) => i.Tipo === name);
			} else {
				this.items = this.allItems;
			}
		},
	},
	data() {
		return {
			allItems: [],
			allItemsBak: [],
			items: [],
			filtered: [],
			searcheable: [],
			query: {
				assunto: '',
				br: '',
				diploma: '',
				data: '',
			},

			images: [],
			allImages: [],
			filters: [],
			activeFilter: null,
			index: null,
			slideImages: [],
		};
	},
	mounted() {
		window.mainExecution();

		this.$http
			.get('publicacoes.json')
			.then((data) => {
				//console.log(data.data.d.results[0]);
				this.allItems = data.data.d.results.filter(
					(i) =>
						i.Folder.Files &&
						i.Folder.Files.results?.length &&
						!i.Folder.Name.includes('Auditorias de Desempenho') &&
						!i.Folder.Name.includes('Contas do TA')
				);
			})
			.catch((error) => {
				console.log(error);
			});
		this.$http
			.get('publicacoes_bak.json')
			.then((data) => {
				//console.log(data.data.d.results[0]);
				this.allItemsBak = data.data.d.results.filter(
					(i) =>
						i.Folder.Files &&
						i.Folder.Files.results?.length &&
						!i.Folder.Name.includes('Auditorias de Desempenho') &&
						!i.Folder.Name.includes('Contas do TA')
				);
				if (this.allItems.length < this.allItemsBak.length) {
					console.log('change to backup');
					this.allItems = this.allItemsBak;
				} else {
					console.log('not change to backup');
				}
			})
			.catch((error) => {
				console.log(error);
			});
		this.items = this.allItems;
		this.searcheable = this.items.flatMap((item) => {
			if (item.Folder.Files) {
				return item.Folder.Files.results
					.sort((a, b) => a.Name.localeCompare(b.Name))
					.reverse()
					.flatMap((file) => {
						return {
							Tipo: item.Tipo,
							Title: item.Title || item.Folder.Name,
							File: file,
						};
					});
			}
		});
	},
};
</script>

<style scoped></style>
