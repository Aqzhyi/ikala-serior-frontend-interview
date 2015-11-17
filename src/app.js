import angular from 'angular'
import 'angular-resource'

let app = angular.module('myApp', ['ngResource'])

app.config([
  '$httpProvider',
  ($http) => {
    let csrfToken = document.querySelector('meta[name=csrf-token]').content

    let csrfMethods = ['get', 'post', 'put', 'patch', 'delete']
    let requestedWithMethods = ['get', 'post', 'put', 'patch', 'delete']

    for (let methodName of csrfMethods) {
      $http.defaults.headers[methodName] = $http.defaults.headers[methodName] || {}
      $http.defaults.headers[methodName]['X-CSRF-Token'] = csrfToken
    }

    for (let methodName of requestedWithMethods) {
      $http.defaults.headers[methodName] = $http.defaults.headers[methodName] || {}
      $http.defaults.headers[methodName]['X-Requested-With'] = 'XMLHttpRequest'
    }
  }
])

export default app
