# Dawntraoz (dt) Design System x Nuxt Layer

This repository contains the main shared components and utils for Dawntraoz website using a Nuxt extendable layer.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Extending your project with this layer

> Pre-requirements, the main project shall use `@storyblok/nuxt` and have a copy of the tailwind.config.ts in the root of this repo.

Add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: [
    [
      'github:Dawntraoz/dt-design-system'
      { install: true },
    ],
  ],
})
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Or statically generate it with:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```
