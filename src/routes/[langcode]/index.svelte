<script context="module">
	import languages from '../../_languages.js';

	export async function preload({ params }) {
		const { langcode } = params;

		let lang = {}, english = {};
		try {
			let res = await this.fetch(`/languages/${langcode}.json`);
			lang = await res.json();
		} catch(e) {}

		try {
			let res = await this.fetch('/languages/en.json');
			english = await res.json();
		} catch(e) {}

		const this_lang = languages[langcode];

		return { lang, english, this_lang };
	}
</script>

<script>
	import { onMount } from 'svelte';
	import Displayer from '../../components/Displayer.svelte';

	export let lang, english, this_lang;

	function save() {
		console.log('saving...')
		if(!fetch) return;
		console.log('sending info...')
		fetch('/api/update_language', {
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
		<h1>{this_lang.name}</h1>

		<Displayer english={english} bind:data={lang} />

		<button on:click={save}>Save</button>
	</div>
</main>
