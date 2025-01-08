<template>
	<div class="desktop-background">
		<div
			v-for="(circle, index) in circleElements"
			:key="index"
			class="desktop-background-element"
			:style="{
				left: `${circle.x}%`,
				top: `${circle.y}%`,
				backgroundColor: circle.color,
				animationDelay: `${index * -10}s`,
			}"
		/>
		<div class="desktop-background-noise">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 700 700"
			>
				<defs>
					<filter id="noise-filter">
						<feTurbulence
							type="turbulence"
							baseFrequency="0.2"
							numOctaves="4"
							result="turbulence"
						/>
						<feSpecularLighting
							surfaceScale="10"
							specularConstant="1"
							specularExponent="20"
							lighting-color="#fff"
							in="turbulence"
							result="specularLighting"
						>
							<feDistantLight
								azimuth="3"
								elevation="177"
							/>
						</feSpecularLighting>
					</filter>
				</defs>
			</svg>
			<div class="desktop-background-noise-cover" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return {
			circleElements: [{
				x: 35,
				y: -30,
				color: '#9B5DCA',
			}, {
				x: -55,
				y: -20,
				color: '#B532CA',
			}, {
				x: 45,
				y: 30,
				color: '#c2626c',
			}, {
				x: 70,
				y: -50,
				color: '#f1c6cf',
			}, {
				x: 15,
				y: -85,
				color: '#c260a7',
			}, {
				x: -40,
				y: -70,
				color: '#4d68bb',
			}],
		}
	},
})
</script>

<style lang="scss" scoped>
.desktop-background {
	width: 100dvw;
	height: 100dvh;
	position: relative;
	overflow: hidden;
	filter: contrast(200%);

	&-noise-cover {
		position: absolute;
		inset: 0;
		filter: url('#noise-filter');
		opacity: 75%;
		mix-blend-mode: soft-light;
	}

	&-element {
		rotate: 50deg;
		width: 75%;
		aspect-ratio: 1/1.15;
		position: absolute;
		border-radius: 9999px;
		filter: blur(200px);
		animation: rotate 60s 0.1s linear infinite;
		transform-origin: center;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0) translate3d(0, 0, 0);
		}

		25% {
			transform: rotate(90deg) translate3d(-10%, 0, 5px);
		}

		50% {
			transform: rotate(180deg) translate3d(0, -20%, 10px);
		}

		75% {
			transform: rotate(270deg) translate3d(10%, 0, 5px);
		}

		100% {
			transform: rotate(360deg) translate3d(0, 0, 0);
		}
	}
}
</style>
