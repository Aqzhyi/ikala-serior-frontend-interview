import app from '../../app'
import tpl from 'html!./index.html'
import './index.scss'

app.directive('homeApp', () => {
  return {
    restrict: 'E',
    controllerAs: 'vm',
    controller,
    template: tpl,
  }
})

controller.$inject = [
  '$q',
  'Images',
]

function controller($q, Images) {
  let vm = this

  vm.images = Images.query()
  vm.imagesPreview = []
  vm.imagesSelected = imagesSelected
  vm.imagesUpload = []
  vm.upload = upload

  ///// implementations
  function imagesSelected($files) {
    vm.imagesPreview = []
    vm.imagesUpload = []
    ;[].forEach.call($files, (file) => {
      if (file.dataURL.match(/image/)) {
        vm.imagesPreview.push(file.dataURL)
        vm.imagesUpload.push(file.dataURL)
      }
      else {
        vm.imagesPreview.push(`https://placehold.it/400x400&text=${file.name}`)
      }
    })
  }

  function upload() {
    let uploadPromises = []

    vm.imagesUpload.forEach((dataURL) => {
      let img = new Images({data: dataURL})

      let promise = img.$save().then(({data}) => vm.images.push(new Images({data})))

      uploadPromises.push(promise)
    })

    $q.all(uploadPromises).then(() => {
      vm.imagesUpload = []
      vm.imagesPreview = []
    })
  }
}
