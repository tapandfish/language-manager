import fs from 'fs';

export function post(req, res, next) {
	const newfile = JSON.stringify(req.body, null, "\t");
	fs.writeFile('./static/languages/en.json', newfile, 'utf8', err => {
		if(err)
			console.log(err);
		res.end('saved');
	});
}
