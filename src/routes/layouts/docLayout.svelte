<script>
  import 'prism-themes/themes/prism-holi-theme.css';
  import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto pb-8">
  <div class="container flex flex-wrap mx-auto pt-8">
    <slot />

    <h2 class="text-2xl w-full dark:text-white py-8">Related topics</h2>

    <p class="dark:text-white text-lg w-full">
      <a href="/getting-started" class="text-blue-600 hover:underline dark:text-blue-500">Getting started</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">Type list</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/about" class="text-blue-600 hover:underline dark:text-blue-500">About</a>
    </p>
    <p class="dark:text-white text-lg w-full">
      <a href="/cli" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite-Svelte-CLI</a>
    </p>

    <h2 class="text-2xl dark:text-white w-full pt-8 py-8">References</h2>

    <p class="dark:text-white w-full text-lg">
      <a href="https://svelte.dev/docs" class="text-blue-600 hover:underline dark:text-blue-500">Svelte</a>
    </p>

    <p class="dark:text-white w-full text-lg">
      <a href="https://kit.svelte.dev/docs" class="text-blue-600 hover:underline dark:text-blue-500">SvelteKit</a>
    </p>

    <p class="dark:text-white w-full text-lg">
      <a href="https://tailwindcss.com/docs/installation" class="text-blue-600 hover:underline dark:text-blue-500">TailwindCSS</a>
    </p>

    <p class="dark:text-white w-full text-lg">
      <a href="https://flowbite.com/docs/getting-started/introduction/" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite</a>
    </p>

    <p class="dark:text-white w-full text-lg">
      <a href="https://github.com/shinokada/svelte-sidebar" class="text-blue-600 hover:underline dark:text-blue-500">Svelte-sidebar</a>
    </p>
  </div>

  <div class="container my-16 mx-auto">
    <Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
  </div>
</div>
