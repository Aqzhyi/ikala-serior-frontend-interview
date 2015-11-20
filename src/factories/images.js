import angular from 'angular'
import app from '../app'

app.factory('Images', [
  '$resource',
  '$http',
  factory
])

function factory($resource, $http) {

  let csrfToken = document.querySelector('meta[name=csrf-token]').content
  let headers = angular.copy($http.defaults.headers)

  let csrfMethods = ['get', 'post', 'put', 'patch', 'delete']
  let requestedWithMethods = ['get', 'post', 'put', 'patch', 'delete']

  for (let methodName of csrfMethods) {
    headers[methodName] = headers[methodName] || {}
    headers[methodName]['X-CSRF-Token'] = csrfToken
  }

  for (let methodName of requestedWithMethods) {
    headers[methodName] = headers[methodName] || {}
    headers[methodName]['X-Requested-With'] = 'XMLHttpRequest'
  }

  return $resource('/images', {}, {
    query: {
      method: 'GET',
      isArray: true,
      headers: headers.get,
    },
    save: {
      method: 'POST',
      headers: headers.post,
    }
  })
}
