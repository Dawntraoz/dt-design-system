export default defineAppConfig({
  dtDesignSystem: {
    name: 'Hello from Nuxt layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    dtDesignSystem?: {
      /** Project name */
      name?: string
    }
  }
}
