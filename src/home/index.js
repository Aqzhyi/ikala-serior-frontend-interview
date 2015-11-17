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

controller.$inject = [
  'Images'
]

function controller(Images) {
  let vm = this

  vm.images = Images.query()
}
