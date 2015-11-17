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

  vm.imagesPreview = []
  vm.images = Images.query()

  vm.imagesSelected = ($files) => {
    vm.imagesPreview = []
    ;[].forEach.call($files, (file) => {
      if (file.dataURL.match(/image/)) {
        vm.imagesPreview.push(file.dataURL)
      }
      else {
        vm.imagesPreview.push(`https://placehold.it/400x400&text=${file.name}`)
      }
    })
  }
}
