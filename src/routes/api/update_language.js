import fs from 'fs';
import languages from '../../_languages.js';

export function post(req, res, next) {
	const { newfile, langcode } = req.body;
	if(!newfile || !langcode || !languages[langcode]) {
		res.end('nope');
		return;
	}
	const lang = languages[langcode];

	fs.writeFile(`./static/languages/${lang.file}`, JSON.stringify(newfile, null, '\t'), 'utf8', err => {
		if(err)
			console.log(err);
		res.end('saved');
	});
}
