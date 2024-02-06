<template>
	<div class="wrapper">
		<q-header />
		<q-bread-crumb />
		<section class="careers">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="pagetitle__form">
							<label class="offset-11">
								<button @click="clear">
									<i class="icon-query"></i> Limpar
								</button>
							</label>
							<form @submit.prevent="search">
								<div class="form-row">
									<div class="col-12">
										<input
											v-model="query.search"
											type="text"
											class="form-control bordered-box"
											placeholder="Escreva o que procurar e pise em ENTER"
											@keyup="search"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
					<!-- /.col-xl-6 -->
				</div>
			</div>
		</section>
		<section class="careers">
			<v-container>
				<v-card v-show="query.search" justify="center">
					<v-card-title>
						Resultado da pesquisa por: {{ query.search }}
					</v-card-title>
					<v-card-text>
						<v-expansion-panels focusable accordion>
							<v-expansion-panel :key="1">
								<v-expansion-panel-header
									>Resultado da legislação</v-expansion-panel-header
								>
								<v-expansion-panel-content>
									<v-data-table
										:headers="legislacao.headers"
										:items="legislacao.items"
										:search="query.search"
										:page.sync="legislacao.page"
										:items-per-page="legislacao.itemsPerPage"
										:no-data-text="'Não há dados disponíveis'"
										:no-results-text="
											'Nenhum registro correspondente encontrado'
										"
										hide-default-footer
										class="elevation-1"
										@page-count="legislacao.pageCount = $event"
									>
										<template v-slot:item.Data_do_BR="{ item }">
											<span class="job__location">
												{{ item.Data_x0020_do_x0020_BR | date }}
											</span>
										</template>
										<template v-slot:item.Área_de_Apoio="{ item }">
											<span
												v-for="(area, areadIndex) in item
													.OData__x00c1_rea_x0020_de_x0020_Apoio_0.results"
												:key="areadIndex"
											>
												{{ area }}
											</span>
										</template>
										<template v-slot:item.Sumario="{ item }">
											<span class="job__location">
												{{ item.Assunto | excerpt }}
											</span>
										</template>
										<template v-slot:item.Document="{ item }">
											<div
												class="col-sm-12 col-md-12 col-lg-8"
												v-if="item.AttachmentFiles.results.length"
											>
												<div
													class="row mb-5"
													v-for="(file, index) in item.AttachmentFiles.results"
													:key="'file' + index"
												>
													<!-- /.col-lg-5 -->
													<div
														class="align-items-center justify-content-end btn-wrap"
													>
														<a
															:href="getFileUrl(file)"
															target="_blank"
															class="btn btn__secondary"
															>Abrir</a
														>
													</div>
													<!-- /.col-lg-3 -->
												</div>
												<hr />
											</div>
										</template>
									</v-data-table>
									<div class="text-center pt-2">
										<v-pagination
											v-model="legislacao.page"
											:length="legislacao.pageCount"
											:total-visible="7"
										></v-pagination>
									</div>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel :key="2">
								<v-expansion-panel-header
									>Resultado da jurisprudência</v-expansion-panel-header
								>
								<v-expansion-panel-content>
									<v-data-table
										:headers="jurisprudencia.headers"
										:locale="pt"
										:items="jurisprudencia.items"
										:search="query.search"
										:page.sync="jurisprudencia.page"
										:items-per-page="jurisprudencia.itemsPerPage"
										:no-data-text="'Não há dados disponíveis'"
										:no-results-text="
											'Nenhum registro correspondente encontrado'
										"
										hide-default-footer
										class="elevation-1"
										@page-count="jurisprudencia.pageCount = $event"
									>
										<template v-slot:item.Document="{ item }">
											<div
												class="col-sm-12 col-md-12 col-lg-8"
												v-if="item.documento.length"
											>
												<div
													class="row mb-5"
													v-for="(file, index) in item.documento"
													:key="'file' + index"
												>
													<!-- /.col-lg-5 -->
													<div
														class="align-items-center justify-content-end btn-wrap"
													>
														<a
															:href="getFileUrl(file)"
															target="_blank"
															class="btn btn__secondary"
															>Abrir</a
														>
													</div>
													<!-- /.col-lg-3 -->
												</div>
												<hr />
											</div>
										</template>
										<template v-slot:item.data_acordao="{ item }">
											<span class="job__location">
												{{ item.data_acordao | date }}
											</span>
										</template>
										<template v-slot:item.Sumario="{ item }">
											<span class="job__location">
												{{ item.sumario | excerpt }}
											</span>
										</template>
										<template v-slot:item.Assunto="{ item }">
											<div
												class="job__meta"
												v-for="(subject, index) in item.assunto"
												:key="'subject' + index"
											>
												<span class="job__location">
													{{ subject }}
												</span>
											</div>
										</template>
									</v-data-table>
									<div class="text-center pt-2">
										<v-pagination
											v-model="jurisprudencia.page"
											:length="jurisprudencia.pageCount"
											:total-visible="7"
										></v-pagination>
									</div>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel :key="3">
								<v-expansion-panel-header
									>Resultado da documentação</v-expansion-panel-header
								>
								<v-expansion-panel-content>
									<v-data-table
										:headers="docs.headers"
										:items="docs.items"
										:search="query.search"
										:page.sync="docs.page"
										:items-per-page="docs.itemsPerPage"
										:no-data-text="'Não há dados disponíveis'"
										:no-results-text="
											'Nenhum registro correspondente encontrado'
										"
										hide-default-footer
										class="elevation-1"
										@page-count="docs.pageCount = $event"
									>
										<template v-slot:item.Document="{ item }">
											<div
												class="align-items-center justify-content-end btn-wrap"
											>
												<a
													:href="getFileUrl(item)"
													target="_blank"
													class="btn btn__secondary"
													>Abrir</a
												>
											</div>
											<!-- /.col-lg-3 -->
										</template>
										<template v-slot:item.TimeLastModified="{ item }">
											<span class="job__location">
												{{ item.TimeLastModified | date }}
											</span>
										</template>
									</v-data-table>
									<div class="text-center pt-2">
										<v-pagination
											v-model="docs.page"
											:length="docs.pageCount"
											:total-visible="7"
										></v-pagination>
									</div>
								</v-expansion-panel-content>
							</v-expansion-panel>
							<v-expansion-panel :key="4">
								<v-expansion-panel-header
									>Resultado de Artigos</v-expansion-panel-header
								>
								<v-expansion-panel-content>
									<v-data-table
										:headers="news.headers"
										:items="news.items"
										:search="query.search"
										:page.sync="news.page"
										:items-per-page="news.itemsPerPage"
										:no-data-text="'Não há dados disponíveis'"
										:no-results-text="
											'Nenhum registro correspondente encontrado'
										"
										hide-default-footer
										class="elevation-1"
										@page-count="news.pageCount = $event"
									>
										<template v-slot:item.Document="{ item }">
											<div
												class="align-items-center justify-content-end btn-wrap"
											>
												<router-link
													:to="{
														name: item.router,
														params: { guid: item.GUID },
													}"
													class="btn btn__secondary"
													>Abrir</router-link
												>
											</div>

											<!-- /.col-lg-3 -->
										</template>
										<template v-slot:item.Content="{ item }">
											<textarea
												id="tx1"
												rows="3"
												cols="50"
												v-html="item.Content"
											></textarea>
											<br />
											<!-- <p
												class="post__desc"
												v-html="$options.filters.excerpt(item.Content)"
											></p> -->
										</template>
										<template v-slot:item.TimeLastModified="{ item }">
											<span class="job__location">
												{{ item.Created | date }}
											</span>
										</template>
									</v-data-table>
									<div class="text-center pt-2">
										<v-pagination
											v-model="news.page"
											:length="news.pageCount"
											:total-visible="7"
										></v-pagination>
									</div>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-card-text>
				</v-card>
			</v-container>
		</section>
		<v-container>
			<v-row> </v-row>
			<!-- /.container -->
		</v-container>
		<!-- /.careers -->
		<q-footer />
	</div>
</template>

<script>
import QFooter from '@/components/Footer';
import QHeader from '@/components/Header/Header';
import QBreadCrumb from '@/components/BreadCrumb';

export default {
	name: 'QLaw',
	components: { QBreadCrumb, QHeader, QFooter },
	methods: {
		clear() {
			this.query.search = '';
			this.query.br = '';
			this.query.diploma = '';
			this.query.data = '';
			this.query.area = '';

			this.search();
		},
		searchLegislacao() {
			/*  if (
         this.query.assunto ||
         this.query.br ||
         this.query.diploma ||
         this.query.data ||
         this.query.area
       ) {
         this.legislacao.items = this.legislacao.data.filter(
           (file) =>
             (this.query.assunto === '' ||
               file.Title?.toLowerCase().includes(
                 this.query.assunto.toLowerCase()
               ) ||
               file.Assunto?.toLowerCase().includes(
                 this.query.assunto.toLowerCase()
               )) &&
             (this.query.br === '' ||
               file.N_x00fa_mero_x0020_do_x0020_BR?.toLowerCase().includes(
                 this.query.br.toLowerCase()
               )) &&
             (this.query.area === '' ||
               file.OData__x00c1_rea_x0020_de_x0020_Apoio_0.results?.find((x) =>
                 x.toLowerCase().includes(this.query.area.toLowerCase())
               ) ||
               file.OData__x00c1_rea_x0020_de_x0020_Apoio_?.toLowerCase().includes(
                 this.query.area.toLowerCase()
               )) &&
             (this.query.diploma === '' ||
               file.N_x00fa_meroDaLegisla_x00e7__x00?.toLowerCase().includes(
                 this.query.diploma.toLowerCase()
               )) &&
             (this.query.data === '' ||
               this.compareDate(file.Data_x0020_do_x0020_BR, this.query.data))
         );
       } else {
         this.legislacao.items = this.legislacao.data;
       } */
		},
		search() {},
		compareDate(a, b) {
			let dateA = new Date(a).toDateString();
			let dateB = new Date(b).toDateString();

			return dateA.toLowerCase().includes(dateB.toLowerCase());
		},
		getFileUrl(item) {
			return item && item.ServerRelativeUrl
				? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl
				: '#';
		},
		initLegislcacao() {
			this.$http
				.get('legislacaoAll.json')
				.then((data) => {
					this.legislacao.data = data.data.d.results;

					this.legislacao.items = this.legislacao.data
						.sort(
							(a, b) =>
								new Date(a.Data_x0020_do_x0020_BR) -
								new Date(b.Data_x0020_do_x0020_BR)
						)
						.reverse();
				})
				.catch((error) => {
					console.log(error);
				});

			this.$http
				.get('legislacaoAll_bak.json')
				.then((data) => {
					this.allItemsBak = data.data.d.results;

					if (this.legislacao.data.length < 10) {
						this.legislacao.data = this.allItemsBak;
						this.legislacao.items = this.legislacao.data
							.sort(
								(a, b) =>
									new Date(a.Data_x0020_do_x0020_BR) -
									new Date(b.Data_x0020_do_x0020_BR)
							)
							.reverse();
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		initJurisprudencia() {
			this.$http
				.get('jurispudenciaAll.json')
				.then((data) => {
					this.jurisprudencia.data = data.data.d.results.map((f) => {
						return {
							seccao_origem: f.Sec_x00e7__x00e3_o_x0020_de_x002,
							n_processo: f.Numero_x0020_Processo
								? f.Numero_x0020_Processo
								: f.N_x002e__x00ba__x0020_do_x0020_P
								? f.N_x002e__x00ba__x0020_do_x0020_P
								: f.NProcesso,
							n_acordao: f.OData__N_x00b0__x0020_do_x0020_Acord_x
								? f.OData__N_x00b0__x0020_do_x0020_Acord_x
								: f.NAcordao
								? f.NAcordao
								: f.N_x00b0__x0020_do_x0020_Acord_x0,
							data_acordao: f.Data_x0020_do_x0020_Ac_x00f3_rd_,
							relator: f.OData__Relator ? f.OData__Relator : f.Relator,
							assunto: f.Assunto.results,
							sumario: f.Sum_x00e1_rio,
							documento: f.AttachmentFiles.results,
							tipo_acordao: f.Ac_x00f3_rd_x00e3_o_x0020_ou_x00,
							subseccao: f.Subsec_x00e7__x00e3_o,
							Created: f.Created,
						};
					});

					this.jurisprudencia.items = this.jurisprudencia.data
						.sort((a, b) => new Date(a.Created) - new Date(b.Created))
						.reverse();
				})
				.catch((error) => {
					console.log(error);
				});

			this.$http
				.get('jurispudenciaAll_bak.json')
				.then((data) => {
					this.allItemsBak = data.data.d.results.map((f) => {
						return {
							seccao_origem: f.Sec_x00e7__x00e3_o_x0020_de_x002,
							n_processo: f.Numero_x0020_Processo
								? f.Numero_x0020_Processo
								: f.N_x002e__x00ba__x0020_do_x0020_P
								? f.N_x002e__x00ba__x0020_do_x0020_P
								: f.NProcesso,
							n_acordao: f.OData__N_x00b0__x0020_do_x0020_Acord_x
								? f.OData__N_x00b0__x0020_do_x0020_Acord_x
								: f.NAcordao
								? f.NAcordao
								: f.N_x00b0__x0020_do_x0020_Acord_x0,
							data_acordao: f.Data_x0020_do_x0020_Ac_x00f3_rd_,
							relator: f.OData__Relator ? f.OData__Relator : f.Relator,
							assunto: f.Assunto.results,
							sumario: f.Sum_x00e1_rio,
							documento: f.AttachmentFiles.results,
							tipo_acordao: f.Ac_x00f3_rd_x00e3_o_x0020_ou_x00,
							subseccao: f.Subsec_x00e7__x00e3_o,
							Created: f.Created,
						};
					});

					if (this.jurisprudencia.data.length < 10) {
						this.jurisprudencia.data = this.allItemsBak;
						this.jurisprudencia.items = this.jurisprudencia.data
							.sort(
								(a, b) =>
									new Date(a.Data_x0020_do_x0020_BR) -
									new Date(b.Data_x0020_do_x0020_BR)
							)
							.reverse();
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		async initDocs() {
			this.$http
				.get('planoEstrategico.json')
				.then((data) => {
					data.data.d.results
						.filter((i) => i.Name !== 'Forms')
						.map((f) => {
							f.Files.results.forEach((k) => {
								k.tipo_doc = 'Plano Estrategico';
								k.title = f.Name;
								this.docs.data.push(k);
							});
						});
				})
				.catch((error) => {
					console.log(error);
				});
			this.$http
				.get('relatorioAuditoriaDesempenho.json')
				.then((data) => {
					data.data.d.results
						.filter((i) => i.Name !== 'Forms')
						.map((f) => {
							f.Files.results.forEach((k) => {
								k.tipo_doc = 'Relatório de auditoria de desempenho';
								k.title = f.Name;
								this.docs.data.push(k);
							});
						});
				})
				.catch((error) => {
					console.log(error);
				});
			await this.$http
				.get('rpcge.json')
				.then((data) => {
					data.data.d.results
						.filter((i) => i.Name !== 'Forms')
						.map((f) => {
							f.Files.results.forEach((k) => {
								k.tipo_doc = 'Relatórios e Pareceres CGE';
								k.title = f.Name;
								this.docs.data.push(k);
							});
						});
				})
				.catch((error) => {
					console.log(error);
				});
			await this.$http
				.get('contas.json')
				.then((data) => {
					data.data.d.results
						.filter((i) => i.Name !== 'Forms')
						.map((f) => {
							f.Files.results.forEach((k) => {
								k.tipo_doc = 'Certificação de contas';
								k.title = f.Name;
								this.docs.data.push(k);
							});
						});
				})
				.catch((error) => {
					console.log(error);
				});
			await this.$http
				.get('publicacoes.json')
				.then((data) => {
					data.data.d.results
						.filter((i) => i.Name !== 'Forms')
						.map((f) => {
							f.Folder.Files.results.forEach((k) => {
								k.tipo_doc = 'Publicações';
								k.title = f.Folder.Name;
								this.docs.data.push(k);
							});
						});
					//console.log(data.data.d.results);
				})
				.catch((error) => {
					console.log(error);
				});
			this.docs.items = this.docs.data;
		},
		async initNews() {
			await this.$http
				.get('news.json')
				.then((data) => {
					data.data.d.results.map((k) => {
						k.tipo_doc = 'Notícias';
						k.router = 'blog-item';

						this.news.items.push(k);
						//	return k;
					});
				})
				.catch((error) => {
					console.log(error);
				});
			await this.$http
				.get('instituicao.json')
				.then((data) => {
					data.data.d.results.map((k) => {
						k.tipo_doc = 'Instituição';
						k.router = 'institution-item';

						this.news.items.push(k);
						//	return k;
					});
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	data() {
		return {
			legislacao: {
				headers: [
					{
						value: 'Tipo_x0020_de_x0020_Legisla_x00e',
						text: 'Tipo de Legislação',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'N_x00fa_mero_x0020_do_x0020_BR',
						text: 'Número do BR',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'N_x00fa_meroDaLegisla_x00e7__x00',
						text: 'Número de Legislação',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Legisla_x00e7__x00e3_o_x0020_Ger',
						text: 'Legislação',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Data_do_BR',
						text: 'Data do BR',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Área de Apoio',
						text: 'Área de Apoio',
						sortable: true,
						class: 'btn__primary text-white',
					},

					{
						value: 'Sumario',
						text: 'Sumário',
						sortable: true,
						class: 'btn__primary text-white col-3',
					},
					{
						value: 'Document',
						text: 'Documento',
						sortable: true,
						class: 'btn__primary text-white',
					},
				],
				items: [],
				data: [],
				page: 1,
				pageCount: 0,
				itemsPerPage: 10,
			},
			jurisprudencia: {
				headers: [
					{
						value: 'seccao_origem',
						text: 'Secção de origem',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'n_acordao',
						text: 'N. Acórdão',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'n_processo',
						text: 'N. do Processo',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'data_acordao',
						text: 'Data do Acórdão',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'relator',
						text: 'Relator',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Assunto',
						text: 'Assunto',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Sumario',
						text: 'Sumário',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Document',
						text: 'Documento',
						sortable: true,
						class: 'btn__primary text-white',
					},
				],
				items: [],
				data: [],
				page: 1,
				pageCount: 0,
				itemsPerPage: 10,
			},
			docs: {
				headers: [
					{
						value: 'tipo_doc',
						text: 'Categoria Documento',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'title',
						text: 'Titulo',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Name',
						text: 'Nome do Documento',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'TimeLastModified',
						text: 'Ultima modificação',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Document',
						text: 'Documento',
						sortable: true,
						class: 'btn__primary text-white',
					},
				],
				items: [],
				data: [],
				page: 1,
				pageCount: 0,
				itemsPerPage: 10,
			},
			news: {
				headers: [
					{
						value: 'tipo_doc',
						text: 'Categoria',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Title',
						text: 'Titulo',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Content',
						text: 'Conteúdo',
						sortable: true,
						class: 'btn__primary text-white col-4',
					},
					{
						value: 'TimeLastModified',
						text: 'Ultima Modificação',
						sortable: true,
						class: 'btn__primary text-white',
					},
					{
						value: 'Document',
						text: 'Link',
						sortable: true,
						class: 'btn__primary text-white',
					},
				],
				items: [],
				data: [],
				page: 1,
				pageCount: 0,
				itemsPerPage: 10,
			},
			allItems: [],
			allItemsBak: [],
			items: [],
			areas: [],
			filtered: [],
			searcheable: [],
			query: {
				search: '',
				assunto: '',
				br: '',
				diploma: '',
				data: '',
				area: '',
			},
			perPage: 10,
			currentPage: 1,
			fields: [
				{
					key: 'Tipo_x0020_de_x0020_Legisla_x00e',
					label: 'Tipo de Legislação',
					sortable: true,
					class: 'btn__primary text-white',
				},
				{
					key: 'N_x00fa_mero_x0020_do_x0020_BR',
					label: 'Número do BR',
					sortable: true,
					class: 'btn__primary text-white',
				},
				{
					key: 'N_x00fa_meroDaLegisla_x00e7__x00',
					label: 'Número de Legislação',
					sortable: true,
					class: 'btn__primary text-white',
				},
				{
					key: 'Legisla_x00e7__x00e3_o_x0020_Ger',
					label: 'Legislação',
					sortable: true,
					class: 'btn__primary text-white',
				},
				{
					key: 'Data_do_BR',
					label: 'Data do BR',
					sortable: true,
					class: 'btn__primary text-white',
				},
				{
					key: 'Área de Apoio',
					label: 'Área de Apoio',
					sortable: true,
					class: 'btn__primary text-white',
				},

				{
					key: 'Sumario',
					label: 'Sumário',
					sortable: true,
					thClass: 'btn__primary col-3',
				},
				{
					key: 'Document',
					label: 'Documento',
					sortable: true,
					class: 'btn__primary text-white',
				},
			],
		};
	},
	created() {},
	mounted() {
		window.mainExecution();
		this.initLegislcacao();
		this.initJurisprudencia();
		this.initDocs();
		this.initNews();
		this.query.search = this.$route.query.query;
	},
};
</script>

<style scoped>
#tx1 {
	border: none;
}
</style>
