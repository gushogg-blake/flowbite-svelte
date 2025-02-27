---
layout: darkmodeLayout
---

<script>
import { Table, TableDefaultRow }from '$lib/index';
  import componentProps from '../props/DarkMode.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

</script>

<h1 class="text-3xl w-full dark:text-white pt-16">Dark mode</h1>

<p class=" dark:text-white py-8">The best place to import is in the __layout.svelte.</p>

```html
<script>
import { DarkMode } from "flowbite-svelte";
</script>

<DarkMode />
```

<h2 class="text-2xl w-full dark:text-white py-8"><a id="Props">Props</a></h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
let btnClass: string = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed left-2 top-16 z-50"
```

<p class="dark:text-white py-4 text-lg">Set your CSS and add it to the prop.:</p>

```html
<script>
import { DarkMode } from "flowbite-svelte";

let btnClass="Add your class here"
</script>

<DarkMode {btnClass} />
```

<p class="dark:text-white py-4 text-lg">Add the following to the body tag:</p>

```html
<!-- src/app.html -->
<body class="bg-white dark:bg-gray-800">
	<div>%svelte.body%</div>
</body>
```

<h2 class="text-2xl w-full dark:text-white py-8"><a id="How_to_change_Dark_mode_color">How to change Dark mode color</a></h2>

<p class="dark:text-white text-lg w-full"><a href="https://chir.ag/projects/name-that-color/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Find the name of the color from hex color code.</a></p>

<p class="dark:text-white text-lg w-full">Update tailwind.config.cjs:</p>

```js
// ...
  theme: {
    colors: {
      'bigstone': '#173242',
    },
		extend: {}
	},
// ...
```

<p class="dark:text-white text-lg">Update the body class</p>

```html
<!-- src/app.html -->
<body class="bg-white dark:bg-bigstone">
	<div>%svelte.body%</div>
</body>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
