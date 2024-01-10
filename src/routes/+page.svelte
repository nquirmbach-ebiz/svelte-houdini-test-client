<script lang="ts">
	import { onMount } from 'svelte';
	import JSONTree from 'svelte-json-tree';

	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ GetRootItems: store } = data);
</script>

<p>
	<button on:click={() => store.fetch()}>Load data</button>
</p>

{#if $store.data}
	<JSONTree value={$store.data} defaultExpandedLevel={7} />
{/if}
