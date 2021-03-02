<script>
	export let data;

	function addString() {
		const name = prompt('Field name:');
		data[name] = '';
	}

	function addObject() {
		const name = prompt('Field name:');
		data[name] = {};
	}
</script>

<style>
	.entry {
		display: grid;
		margin-left: 1em;
		grid-template-columns: 1fr 8fr;
		grid-column: 2 / 3;
		border: solid 1px #666;
		border-radius: 3px;
		box-shadow: 4px 4px 10px #ddd;
		padding: .3em;
	}

	.entry + .entry {
		margin-top: 1em;
	}

	.key {
		font-weight: bold;
		grid-column: 1 / 2;
		margin-right: .4em;
	}

	.value {
		grid-column: 2 / 3;
	}

	textarea {
		width: 100%;
		height: 100%;
		display: block;
		font-size: .9rem;
		border: solid 1px #333;
		border-radius: 3px;
		padding: .2em .4em;
	}

	.button-container {
		grid-column: 1 / -1;
	}

	button {
		margin: .3em .5em 0 0;
		display: inline-block;
		width: auto;
		padding: .5em 2em;
	}
</style>

{#each Object.entries(data) as [key, _]}
	<div class="entry">
		<div class="key">{key}:</div>
		{#if typeof data[key] !== 'string'}
			<svelte:self bind:data={data[key]} />
		{:else}
			<div class="value"><textarea bind:value={data[key]} /></div>
		{/if}
	</div>
{/each}
<div class="button-container">
	<button on:click={addString}>+ Add string</button>
	<button on:click={addObject}>+ Add object</button>
</div>
