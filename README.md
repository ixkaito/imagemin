# @ixkaito/imagemin

> Minify images seamlessly while preserving directory structure 

Based on [`imagemin`](https://github.com/imagemin/imagemin) but preserves directory structure. Inspired by [`imagemin-dir`](https://github.com/adamduncan/imagemin-dir).

## Install

```
$ npm install @ixkaito/imagemin
```

## Usage

```js
const imagemin = require('@ixkaito/imagemin'); // alternative to imagemin
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
	const files = await imagemin(['images/*.{jpg,png}'], {
		destination: 'build/images',
		plugins: [
			imageminJpegtran(),
			imageminPngquant({
				quality: [0.6, 0.8]
			})
		]
	});

	console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();
```

## API

`@ixkaito/imagemin` maintains the same API as `imagemin`. See https://github.com/imagemin/imagemin.
