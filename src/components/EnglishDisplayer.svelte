<script>
	import { onMount } from 'svelte';
	onMount(() => {
		console.log(Array.isArray(data))
	})

	export let data, location;

	function set(value) {
		if (!Array.isArray(data)) {
			const name = prompt('Field name:');
			data[name] = value;
		} else {
			data.push(value);
		}
	}

	function addString() {
		set('');
	}

	function addObject() {
		set({});
	}
	
	function addArray() {
		set([]);
	}
</script>

<style>
	.entry {
		display: grid;
		grid-template-columns: 250px auto;
		width: 100%;
	}

	.key {
		font-weight: bold;
		grid-column: 1 / 2;
		margin-right: .4em;
		color: #eeb899;
		padding: 0 14px;
		line-height: 60px;
	}

	.value {
		grid-column: 2 / 3;
	}

	textarea {
		width: 100%;
		height: 100%;
	}

	.button-container {
		height: 50px;
		line-height: 50px;
		padding-left: 30px;
	}

	.button-container button {
		height: 30px;
		border-radius: 4px;
		border: none;
		margin: 0 4px;
		padding: 0 14px;
		cursor: pointer;
	}

	.button-container button:nth-child(1) {
		background: linear-gradient(135deg,#ffff80,#ff80bf);
	}
	.button-container button:nth-child(2) {
		background: linear-gradient(135deg,#9580ff,#80ffea);
	}
	.button-container button:nth-child(3) {
		background: linear-gradient(135deg,#ff80bf,#9580ff);
	}
</style>
<div>
	<div class="sticky" id="root{location.replace(/\//g, '-').slice(0, -1)}">{location}</div>
	{#if Array.isArray(data)}
		{#each data as _, key}
			{#if typeof data[key] !== 'string'}
				<svelte:self bind:data={data[key]} location="{location + key + '/'}" />
				<div class="sticky">{location}</div>
			{:else}
				<div class="entry">
					<div class="key">{key}:</div>
					<div class="value"><textarea bind:value={data[key]} /></div>
				</div>
			{/if}
		{/each}
	{:else}
		{#each Object.entries(data) as [key, _]}
			{#if data[key] !== null}
				{#if typeof data[key] !== 'string'}
					<svelte:self bind:data={data[key]} location="{location + key + '/'}" />
					<div class="sticky">{location}</div>
				{:else}
					<div class="entry">
						<div class="key">{key}:</div>
						<div class="value"><textarea bind:value={data[key]} /></div>
					</div>
				{/if}
			{/if}
		{/each}
	{/if}
	<div class="button-container">
		<button on:click={addString}>+ Add string</button>
		<button on:click={addObject}>+ Add object</button>
		<button on:click={addArray}>+ Add array</button>
	</div>
</div>
