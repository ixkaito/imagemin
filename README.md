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

## Destination Path Examples

input: `'assets/_images/**/*'`  
destination: `'assets/images'`
```
assets/_images/foo.jpg -> assets/images/foo.jpg
assets/_images/foo/bar.jpg -> assets/images/foo/bar.jpg
assets/_images/foo/bar/baz.jpg -> assets/images/foo/bar/baz.jpg
```

input: `['source/**/*.{jpg,png,svg}', 'assets/**/*.{jpg,png,svg}']`  
destination: `'dist/assets'`
```
source/images/foo.jpg -> dist/assets/images/foo.jpg
source/images/foo.png -> dist/assets/images/foo.png
source/svg/foo.svg -> dist/assets/svg/foo.svg
assets/images/bar.jpg -> dist/assets/images/bar.jpg
assets/images/bar.png -> dist/assets/images/bar.png
assets/svg/bar.svg -> dist/assets/svg/bar.svg
```

## API

`@ixkaito/imagemin` maintains the same API as `imagemin`. See https://github.com/imagemin/imagemin.
