export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
	],
	devtools: { enabled: true },
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
})