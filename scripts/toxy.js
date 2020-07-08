var toxy = require('toxy')
var poisons = toxy.poisons
var rules = toxy.rules

var proxy = toxy()

proxy
  .forward('https://mujahidk.com')

proxy
  .all('/*')
  .poison(poisons.slowClose({delay: 1000 }))
  .withRule(rules.method('GET'))

proxy.listen(3000)
console.log('Server listening on port:', 3000)
