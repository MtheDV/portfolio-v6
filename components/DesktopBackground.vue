<template>
	<div class="desktop-background">
		<canvas
			ref="gradientCanvas"
			class="background-canvas"
		/>
		<div class="background-noise">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				:viewBox="`0 0 ${canvasWidth} ${canvasHeight}`"
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
			canvasWidth: 1500,
			canvasHeight: 980,
			gradientCanvas: ref<HTMLCanvasElement>(),
			circleElements: [{
				x: 74,
				y: 156,
				color: '#9B5DCA',
			}, {
				x: 1000,
				y: 250,
				color: '#c2626c',
			}, {
				x: 1268,
				y: -400,
				color: '#f1c6cf',
			}, {
				x: 700,
				y: -120,
				color: '#c260a7',
			}, {
				x: 843,
				y: -800,
				color: '#B532CA',
			}, {
				x: 40,
				y: -624,
				color: '#4d68bb',
			}],
		}
	},
	mounted() {
		const canvasCtx = this.gradientCanvas?.getContext('2d')
		if (!this.gradientCanvas || !canvasCtx) return

		// Set our resolution of the canvas to be the original width/height
		this.gradientCanvas.width = this.canvasWidth
		this.gradientCanvas.height = this.canvasHeight

		// Set the filter to blur all the rendered circles
		canvasCtx.filter = 'blur(150px)'

		// Create our circle elements on the canvas from our list of circles
		this.circleElements.forEach((circleElement) => {
			canvasCtx.fillStyle = circleElement.color
			canvasCtx.beginPath()
			canvasCtx.ellipse(
				circleElement.x,
				circleElement.y,
				600,
				800,
				Math.PI / 8,
				0,
				2 * Math.PI,
			)
			canvasCtx.fill()
			canvasCtx.restore()
		})
	},
})
</script>

<style lang="scss" scoped>
.desktop-background {
	width: 100dvw;
	height: 100dvh;
	position: fixed;
	overflow: hidden;
	filter: contrast(200%);
	z-index: -1;
	isolation: isolate;

	.background-canvas {
		position: absolute;
		z-index: 0;
		aspect-ratio: v-bind(canvasWidth) / v-bind(canvasHeight);
		height: 100%;
	}

	.background-noise {
		position: absolute;
		inset: 0;
		filter: url('#noise-filter');
		opacity: 75%;
		mix-blend-mode: soft-light;
		z-index: 1;
	}
}

@media screen and (width >= v-bind(canvasWidth) ){

}
</style>
