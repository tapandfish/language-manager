import fs from 'fs';

function generate_type_definition_object(data) {
	const definition = {}

	for(let key in data) {
		if(typeof data[key] === 'string') {
			definition[key] = ':string';
		} else if(Array.isArray(data[key])) {
			let array_definition = {};

			if(typeof data[key][0] === 'string') {
				array_definition = 'string';
			} else {
				for(let i in data[key]) {
					const inner = generate_type_definition_object(data[key][i]);
					for(let k in inner) {
						array_definition[`${k}?`] = inner[k];
					}
				}
			}

			definition[key] = [array_definition];
		} else {
			definition[key] = generate_type_definition_object(data[key]);
		}
	}

	return definition;
}

function stringify(obj) {
	const elements = [];
	for(let key in obj) {
		if (typeof obj[key] === 'string') {
			elements.push(`${key} ${obj[key]}`);
		} else if(Array.isArray(obj[key])) {
			if(typeof obj[key][0] === 'string') {
				elements.push(`${key} :string[]`);
			} else {
				elements.push(`${key} :Array<${stringify(obj[key][0])}>`);
			}
		} else {
			elements.push(`${key} :${stringify(obj[key])}`);
		}
	}

	return '{' + elements.join(', ') + '}';
}

function generate_type_definition(data) {
	data.current = 'string';
	const obj = generate_type_definition_object(data);
	const definition = stringify(obj);
	return 'export type LangFile = ' + definition;
}

export function post(req, res, next) {
	const newfile = JSON.stringify(req.body, null, "\t");
	fs.writeFile('./static/languages/en.json', newfile, 'utf8', err => {
		if(err)
			console.log(err);

		const definition = generate_type_definition(req.body);
		
		fs.writeFile('./src/_lang_type.ts', definition, 'utf8', err => {
			if(err)
				console.log(err);
			res.end('saved');
		});
	});
}
