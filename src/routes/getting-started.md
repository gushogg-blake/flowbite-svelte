---
layout: docLayout
---

<h1 class="text-3xl w-full dark:text-white pt-16">Getting Started</h1>
<h2 class="text-2xl w-full mt-8 dark:text-white py-4">Installation</h2>
<p class="dark:text-white py-4 text-lg">Install SvelteKit:</p>

```bash
npm init svelte@next sveltekit-demo 
cd sveltekit-demo
npm install 
```

<p class="dark:text-white py-4 text-lg">Install Tailwind CSS:</p>

```bash
npx svelte-add@latest tailwindcss
npm i
```

<p class="dark:text-white py-4 text-lg">Run it:</p>

```bash
npm run dev
```

<p class="dark:text-white py-4 text-lg">Install flowbite and flowbite-svelte:</p>

```sh
npm i -D flowbite flowbite-svelte
```

<p class="dark:text-white py-4 text-lg">Update tailwind.config.cjs:</p>

```js
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
```

<p class="dark:text-white py-4 text-lg">Now you are ready to go!</p>
