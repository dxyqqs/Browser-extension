const Webpack = require('webpack')
const config = require('./wp.config')


Webpack(config,function(err,stats){
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.log(info.errors[0]);
    return;
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings[0]);
  }
  console.warn('done!')
})