import app from '../app'
import tpl from 'html!./index.html'

app.directive('homeApp', () => {
  return {
    restrict: 'E',
    controllerAs: 'vm',
    controller,
    template: tpl,
  }
})

function controller() {
  let vm = this

  console.log('angular bootstrap')
}
