<script>
	export let data, english;

	for(let key in english) {
		if(Array.isArray(english[key]) && !data[key]) {
			data[key] = [];
		} else if(typeof english[key] === 'object' && !data[key]) {
			data[key] = {};
		}
	}

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
		grid-template-columns: 1fr 4fr 4fr;
		grid-column: 2 / -1;
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

{#if Array.isArray(data)}
	{#each english as _, key}
		<div class="entry">
			<div class="key">{key}:</div>
			{#if typeof english[key] !== 'string'}
				<svelte:self english={english[key]} bind:data={data[key]} />
			{:else}
				<div class="value"><textarea bind:value={data[key]} /></div>
				<div class="english"><textarea disabled value={english[key]} /></div>
			{/if}
		</div>
	{/each}
{:else}
	{#each Object.entries(english) as [key, _]}
		<div class="entry">
			<div class="key">{key}:</div>
			{#if typeof english[key] !== 'string'}
				<svelte:self english={english[key]} bind:data={data[key]} />
			{:else}
				<div class="value"><textarea bind:value={data[key]} /></div>
				<div class="english"><textarea disabled value={english[key]} /></div>
			{/if}
		</div>
	{/each}
{/if}
