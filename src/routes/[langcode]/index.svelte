<script context="module">
	import languages from '../../_languages.ts';

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
		if(!this_lang) {
			this.redirect(302, '/');
		}

		return { lang, english, this_lang, langcode };
	}
</script>

<script>
	import { onMount } from 'svelte';
	import Displayer from '../../components/Displayer.svelte';
	import List from '../../components/List.svelte';

	export let lang, english, this_lang, langcode;

	let notification;
	let saving = false;

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function save() {
		if(saving) return;
		if(!fetch) return;
		saving = true;

		notification.classList.toggle('visible');
		await fetch('/api/update_language', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({langcode, newfile:lang})
		});
		await sleep(1000)
		notification.classList.toggle('visible');
		saving = false;
	}

	onMount(() => {
		setInterval(save, 30000);
	});
</script>

<div id="save-notification" bind:this={notification}>
	<i class='fas fa-circle-notch fa-spin'></i> Saving...
</div>

<main>
	<div class="side-bar">
		<h1><a href="/" style="text-decoration:none">Language manager</a></h1>
		<div class="list-container">
			<List {lang} />
		</div>
		<div class="bottom">
			<button on:click={save}>Save</button>
		</div>
	</div>
	<div class="container">
		<h2><span class="flag-icon flag-icon-{this_lang.flag}"></span>{this_lang.name}</h2>

		<Displayer english={english} bind:data={lang} location="/" />
	</div>
</main>
