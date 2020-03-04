const imagemin = require('imagemin');
const globby = require('globby');
const path = require('path');

module.exports = async (input = [], options = {}) => {
  const patterns = [];
  if (Array.isArray(input)) {
    input.map(pattern => {
      patterns.push(pattern.split(path.sep));
    });
  } else if(typeof input === 'string' || input instanceof String) {
    patterns.push(input.split(path.sep));
  } else {
    return;
  }

  const files = await globby(input);
  const { destination } = options;
  return Promise.all(
    files.map(async file => {
      try {
        const pathArray = file.split(path.sep);
        let dirs = [];
        patterns.map(pattern => {
          pathArray.map((dir, index) => {
            if (dir === pattern[index] && index >= dirs.length) {
              dirs.push(dir);
            }
          });
        });
        const regex = new RegExp(`^${dirs.join(path.sep)}/?`);
        const subdir = path.dirname(file.replace(regex, ''));

        return await imagemin([file], {
          ...options,
          destination: path.join(destination, subdir)
        });
      } catch (error) {
        error.message = `Error occurred when handling file: ${file}\n\n${error.stack}`;
        throw error;
      }
    })
  );
};
