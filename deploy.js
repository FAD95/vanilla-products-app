var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish(
  path.join(__dirname, './dist'),
  {
    repo: 'git@github.com:FAD95/vanilla-products-app.git',
  },
  function (err) {
    console.log(err)
    console.log('Se ha subido a gh-pages correctamente')
  }
)
