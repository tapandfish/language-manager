import fs from 'fs';

export function post(req, res, next) {
	const { newfile } = req.body;
	fs.writeFile('./src/_languages.js', newfile, 'utf8', err => {
		if(err)
			console.log(err);
		res.end('saved');
	});
}
