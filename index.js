var loop = require('asyncloop')

module.exports = function(simple, writable, cb) {
  writable
  .on('error', abort)
  .on('close', abort)
  .on('drain', pump)

  function abort() {
    simple.abort(function(err){
      if (err) console.warn(err)
    })
  }

  function pump() {
    loop(function(next) {
      simple.read(function(err, chunk) {
        if (err) return writeable.destroy && writable.destroy(), cb(err)
        if (!chunk) return writable.end()
        var drain = writable.write(chunk)
        if (drain) next()
      })
    })
  }

  pump()
}