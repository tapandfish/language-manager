<script context="module">
	export async function preload() {
		let lang = {};
		try {
			let res = await this.fetch('/languages/en.json');
			lang = await res.json();
		} catch(e) {
		}

		return { lang };
	}
</script>

<script>
	import { onMount } from 'svelte';
	import EnglishDisplayer from '../../components/EnglishDisplayer.svelte';

	export let lang;

	function save() {
		console.log('saving...')
		if(!fetch) return;
		console.log('sending info...')
		fetch('/api/update_english', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(lang)
		});
		console.log('saved...')
	}

	onMount(() => {
		setInterval(save, 30000);
	});
</script>

<style>
	.container {
		max-width: 900px;
	}

	button {
		font-size: 2em;
		margin: 1.5em auto;
	}
</style>

<main>
	<div class="container">
		<h1>English</h1>

		<EnglishDisplayer bind:data={lang} />

		<button on:click={save}>Save</button>
	</div>
</main>
