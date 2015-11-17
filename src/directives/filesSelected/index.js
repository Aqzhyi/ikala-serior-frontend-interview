import angular from 'angular'
import app from '../../app'

app.directive('filesSelected', () => {
  return {
    restrict: 'A',
    controllerAs: 'vm',
    controller,
    scope: {
      filesSelected: '&'
    },
  }
})

controller.$inject = [
  '$scope',
  '$element',
  '$attrs',
  '$q',
  'image',
]

function controller($scope, $element, $attrs, $q, image) {
  let vm = this

  $element.on('change.filesSelected', function (changeEvent) {

    let filesPromises = []

    if (changeEvent.target && changeEvent.target.files instanceof FileList) {

      for (let index = 0; index < changeEvent.target.files.length; index++) {

        let file = changeEvent.target.files[index]
        let promise = image.readAsDataURL(file).then((result) => file.dataURL = result)

        filesPromises.push(promise)
      }
    }

    $q.all(filesPromises).then(() => {
      $scope.filesSelected({
        $files: changeEvent.target.files
      })
    })
  })

  $scope.$on('destroy', () => {
    $element.off('change.filesSelected')
  })
}
