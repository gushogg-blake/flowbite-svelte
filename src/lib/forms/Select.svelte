<script lang="ts">
	import generateId from '../utils/generateId.js';
	export let value: string | number;
	export let id: string = generateId();
	export let name: string = '';
	export let label: string = '';
	export let labelClass: string = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400';
	export let selectClass: string = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
</script>

<label for={id} class={labelClass}>{label}</label>
<select bind:value {id} {name} class={selectClass}>
	<slot />
</select>
