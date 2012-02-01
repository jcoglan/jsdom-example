var jsdom = require('jsdom'),
    fs    = require('fs'),
    html  = fs.readFileSync(__dirname + '/browser.html').toString()

jsdom.env(html, function(errors, window) {
  console.log(errors)
  console.log(window.JS)
})

