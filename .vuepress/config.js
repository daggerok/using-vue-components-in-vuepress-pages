const base = process.env.BASE_HREF || '/';
const title = require('../package.json').description;

module.exports = {
  base,
  title,
};
