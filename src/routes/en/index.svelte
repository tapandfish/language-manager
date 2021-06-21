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
	import List from '../../components/List.svelte';

	export let lang;

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
		// await fetch('/api/update_english', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(lang)
		// });
		await sleep(1000)
		notification.classList.toggle('visible');
		saving = false;
	}

	onMount(() => {
		setInterval(save, 30000);
	});
</script>

<div id="save-notification" bind:this={notification}>
	<i class='fa fa-circle-o-notch fa-spin'></i> Saving...
</div>

<main>
	<div class="side-bar">
		<h1>Language manager</h1>
		<div class="list-container">
			<List {lang} />
		</div>
		<div class="bottom">
			<button on:click={save}>Save</button>
		</div>
	</div>
	<div class="container">
		<h2><span class="flag-icon flag-icon-gb"></span>English</h2>

		<EnglishDisplayer bind:data={lang} location="/" />
	</div>
</main>
