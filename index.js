const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')

function registerPartials(directory) {
  for (let fileName of fs.readdirSync(directory)) {
    const fileMatch = fileName.match(/^(.+)\.hbs$/)
    if (!fileMatch) return

    const name = fileMatch[1] // First regex capture group isolates partial name from file name
    const template = fs.readFileSync(path.join(directory, fileName), 'utf-8')

    handlebars.registerPartial(name, template)
  }
}

module.exports = {
  render: resume => {
    console.log(resume)
    const template = fs.readFileSync(path.join(__dirname, 'resume.hbs'), 'utf-8')

    registerPartials(path.join(__dirname, 'partials'))
    return handlebars.compile(template)({
      css: fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8'),
      resume,
    })
  }
}
