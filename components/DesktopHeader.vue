<template>
	<div class="desktop-header">
		<nuxt-icon
			class="header-logo"
			name="smile"
		/>
		<div class="header-date">
			{{ date }}
		</div>
		<div class="header-time">
			{{ time }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return {
			dateTimeInterval: undefined as undefined | ReturnType<typeof setTimeout>,
		}
	},
	data() {
		return {
			time: '',
			date: '',
		}
	},
	mounted() {
		// Immediately set the date and time, then update
		// every 1 second to ensure the time is up-to-date
		this.updateDateTime()
		this.dateTimeInterval = setInterval(() => {
			this.updateDateTime()
		}, 1000)
	},
	unmounted() {
		clearInterval(this.dateTimeInterval)
	},
	methods: {
		updateDateTime() {
			// We can use the toLocal___String that the Date api provides
			// but, we need to use the 'en-US' format to match the designs
			// we're trying to implement
			const date = new Date()
			this.date = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' }).replace(',', '')
			this.time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
		},
	},
})
</script>

<style lang="scss" scoped>
.desktop-header {
	display: flex;
	gap: 10px;
	padding: 8px 16px;
	width: 100%;
	align-items: center;
	background-color: rgb(0 0 0 / 0.08);
	backdrop-filter: blur(10px);
	border-bottom: solid 1px rgb(255 255 255 / 0.1);

	> * {
		filter: drop-shadow(0 0 5px rgb(0 0 0 / 0.2));
	}

	.header-logo {
		width: 15px;
		height: 15px;
	}

	.header-date,
	.header-time {
		font-size: 0.875rem;
		font-weight: 600;
	}

	.header-date {
		margin-left: auto;
	}
}
</style>
