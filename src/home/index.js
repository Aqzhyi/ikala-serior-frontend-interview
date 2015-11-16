import app from '../app'

app.directive('homeApp', () => {
  return {
    restrict: 'E',
    controllerAs: 'vm',
    controller,
    template: '<h1>123</h1>',
  }
})

function controller() {
  let vm = this

  console.log('angular bootstrap')
}
