<script>
	export let lang;
	export let anchor = 'root';
</script>

<style>
	ul {
		padding-left:20px;
		color: #d0ffcc
	}

	a {
		text-decoration: underline;
		cursor: pointer;
	}
</style>

<ul>
	{#each Object.entries(lang) as [key, _]}
		{#if typeof lang[key] === 'object' && lang[key] !== null}
			<li><a on:click={() => document.getElementById(`${anchor}-${key}`).scrollIntoView()}>{key}</a></li>
			<svelte:self lang={lang[key]} anchor={`${anchor}-${key}`} />
		{/if}
	{/each}
</ul>