<template>
	<li>
		<ul class="navbar-actions list-unstyled mb-0 d-flex align-items-center">
			<li v-show="activeUsersCount > 0">
				<span>
					Online:
					<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
						id="count_visitors">
						{{ activeUsersCount }}
					</span>
				</span>
			</li>
			<li class="d-none d-xl-block"></li>
			<li v-show="visitorsCount > 0">
				<span>
					Visitas :
					<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
						id="count_visitors">
						{{ visitorsCount }}
					</span>
				</span>
			</li>
			<li class="d-none d-xl-block"></li>
			<li class="d-flex align-items-center">
				<a href="https://mail.ta.gov.mz/" class="action__btn" target="_blank"><i
						class="fa-solid fa-envelope-circle-check"></i>
					<img src="assets/images/logo/webmail.png" class="logo-light" alt="logo" /></a>

				<!-- <button class="action__btn action__btn-login open-login-popup">
          <i class="icon-user"></i><span>{{ $tc('Entrar') }}</span>
        </button> -->
			</li>
			<li class="d-none d-xl-block"></li>
			<li class="d-none d-xl-block"></li>
			<li class="d-none d-xl-block"></li>
			<li class="d-none d-xl-block"></li>
			<li class="d-none d-xl-block"></li>
		</ul>
		<!-- /.navbar-actions -->
	</li>
</template>


<script>


export default {
	name: 'QGetQuote',
	data() {
		return {
			users: [],
			activeUsersCount: 0,
			visitorsCount: 0,
		};
	},
	mounted() {
		this.fetchRealTimeData();
	},

	methods: {
		fetchRealTimeData() {
			// Recursive function to check for real-time data
			const checkForRealTimeData = () => {
				gtag('config', 'G-BZT82ZY70K', {
					'send_page_view': false,
					'metric1': 'rt:activeUsers',
				});

				setTimeout(() => {
					const userCount = gtag('get', 'rt:activeUsers');

					if (userCount !== undefined) {
						// Real-time data is available, update the count
						this.activeUsersCount = userCount;
					} else {
						// Data not available yet, retry after a delay
						checkForRealTimeData();
					}
				}, 1000); // Adjust the timeout as needed
			};

			// Start checking for real-time data
			checkForRealTimeData();
		},
		trackVisitorEvent() {
			gtag('event', 'page_view', {
				send_to: 'G-BZT82ZY70K',
				event_category: 'VisitorCount',
				event_label: 'PageView',
			});

			// Wait for gtag to process the event, then retrieve the visitor count
			setTimeout(() => {
				const userCount = gtag('get', 'event', 'VisitorCount');
				this.visitorsCount = userCount;
			}, 1000); // Adjust the timeout as needed
		},

	}
}
</script>

<style scoped></style>
