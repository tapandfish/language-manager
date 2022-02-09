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
		newfile = 'export default ' + newfile + ' as {[key :string]: {name :string, file :string, flag :string}};';

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
		padding-left:20px;
		color: #d0ffcc
	}

	li {
		margin: 10px 0;
	}

	li a span {
		margin-right: 10px;
	}

	a {
		text-decoration: underline;
		cursor: pointer;
	}

	button {
		height: 30px;
		border-radius: 6px;
		border: none;
		margin: 10px 4px;
		padding: 0 30px;
		cursor: pointer;
		background: linear-gradient(135deg,#9580ff,#80ffea);
	}
</style>


<main>
	<div class="side-bar">
		<h1>Available languages:</h1>
		<div class="list-container">
			<ul>
				{#each Object.entries(languages) as [langcode, lang]}
					<li><a href={`/${langcode}/`}><span class="flag-icon flag-icon-{lang.flag}"></span>{lang.name}</a></li>
				{/each}
			</ul>
		</div>
		<div class="bottom">
		</div>
	</div>
	<div class="container">
		<center>
			<h2>Add language:</h2>

			<form on:submit|preventDefault={add}>
				<div>
					<label>Language code:</label>
				</div>
				<div>
					<input type="text" placeholder="en" bind:value={newlang.code}>
				</div>
				<div>
					<label>Language name (in that language):</label>
				</div>
				<div>
					<input type="text" placeholder="English" bind:value={newlang.name}>
				</div>
				<div>
					<label>Language file:</label>
				</div>
				<div>
					<input type="text" placeholder="en.json" bind:value={newlang.file}>
				</div>
				<div>
					<label>Flag code:</label>
				</div>
				<div>
					<input type="text" placeholder="gb" bind:value={newlang.flag}>
				</div>
				<div>
					<button>Add</button>
				</div>
			</form>
		</center>
	</div>
</main>

