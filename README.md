# Sidebar Vue Site

This project uses [Vue 3](https://vuejs.org/) with [Vite](https://vitejs.dev/) to provide a simple website featuring a fixed sidebar navigation.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The repository includes a `netlify.toml` configuration so the site can be deployed on [Netlify](https://www.netlify.com/).

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- All routes redirect to `index.html` to support client-side routing.
