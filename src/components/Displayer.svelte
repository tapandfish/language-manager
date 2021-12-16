<script>
	export let data, english, location;

	for(let key in english) {
		if(english[key] === null) {
			data[key] = null;
		} else if(Array.isArray(english[key]) && !data[key]) {
			data[key] = [];
		} else if(typeof english[key] === 'object' && !data[key]) {
			data[key] = {};
		}
	}
</script>

<style>
	.entry {
		display: grid;
		grid-template-columns: 250px auto auto;
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

	.english {
		grid-column: 3 / 4;
	}

	textarea {
		width: 100%;
		height: 100%;
	}
</style>

<div>
	<div class="sticky" id="root{location.replace(/\//g, '-').slice(0, -1)}">{location}</div>
	{#if Array.isArray(data)}
		{#each english as _, key}
			{#if typeof english[key] !== 'string'}
				<svelte:self english={english[key]} bind:data={data[key]} location="{location + key + '/'}" />
				<div class="sticky">{location}</div>
			{:else}
				<div class="entry">
					<div class="key">{key}:</div>
					<div class="value"><textarea bind:value={data[key]} /></div>
					<div class="english"><textarea disabled value={english[key]} /></div>
				</div>
			{/if}
		{/each}
	{:else}
		{#each Object.entries(english) as [key, _]}
			{#if english[key] !== null}
				{#if typeof english[key] !== 'string'}
					<svelte:self english={english[key]} bind:data={data[key]} location="{location + key + '/'}" />
					<div class="sticky">{location}</div>
				{:else}
					<div class="entry">
						<div class="key">{key}:</div>
						<div class="value"><textarea bind:value={data[key]} /></div>
						<div class="english"><textarea disabled value={english[key]} /></div>
					</div>
				{/if}
			{/if}
		{/each}
	{/if}
</div>
