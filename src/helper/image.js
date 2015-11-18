import app from '../app'

app.factory('image', [
  '$q',
  factory
])

function factory($q) {
  let image = this

  image.readAsDataURL = readAsDataURL

  return image

  ///// implementation
  function readAsDataURL(file) {

    return new $q((done, reject) => {

      if (file instanceof File || file instanceof Blob) {
        var reader = new FileReader()
        reader.onloadend = (loadEvent) => done(loadEvent.target.result)
        reader.readAsDataURL(file)
      }
      else {
        reject(new Error(`Expected image.readAsDataURL(arg1): arg1 to be File instance, but got ${file}`))
      }
    })
  }
}
