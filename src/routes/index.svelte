<script>
	import languages from '../_languages.js';

	let newlang = {
		code: null,
		name: null,
		file: null,
		flag: null
	};

	function add() {
		const { code, name, file, flag } = newlang;
		languages[code] = { name, file, flag };7
		newlang = {
			code: null,
			name: null,
			file: null,
			flag: null
		};
		// Generate new file
		let newfile = JSON.stringify(languages);
		newfile = newfile.replace(/\"(\w+)\":/g, '$1:')
		newfile = 'export default ' + newfile + ';';

		// Save file via API
		fetch('/api/update_languages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({newfile})
		});
	}
</script>

<style>
	ul {
		font-size: 1.3em;
	}

	li span {
		margin-right: 10px;
	}
</style>


<main>
	<div class="container">
		<h1>Available languages:</h1>

		<ul>
			{#each Object.entries(languages) as [langcode, lang]}
				<li><a href={`/${langcode}/`}><span class="flag-icon flag-icon-{lang.flag}"></span>{lang.name}</a></li>
			{/each}
		</ul>

		<h2>Add language:</h2>

		<form on:submit|preventDefault={add}>
			<div>
				<label>Language code:</label>
				<input type="text" placeholder="en" bind:value={newlang.code}>
			</div>
			<div>
				<label>Language name (in that language):</label>
				<input type="text" placeholder="English" bind:value={newlang.name}>
			</div>
			<div>
				<label>Language file:</label>
				<input type="text" placeholder="en.json" bind:value={newlang.file}>
			</div>
			<div>
				<label>Flag code:</label>
				<input type="text" placeholder="gb" bind:value={newlang.flag}>
			</div>
			<div>
				<button>Add</button>
			</div>
		</form>
		<br />
	</div>
</main>
