export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxtjs/google-fonts',
		'nuxt-icons',
	],
	devtools: { enabled: true },
	css: ['~/assets/scss/global.scss'],
	compatibilityDate: '2024-11-01',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				commaDangle: 'always-multiline',
				semi: false,
			},
		},
	},
	googleFonts: {
		preload: true,
		families: {
			Manrope: {
				wght: [300, 400, 500, 600, 700],
			},
		},
	},
})
