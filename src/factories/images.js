import app from '../app'

app.factory('Images', [
  '$resource',
  factory
])

function factory($resource) {
  return $resource('/images', {}, {
    query: {
      method: 'GET',
      isArray: true,
    }
  })
}
