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
  $element.on('change.filesSelected', function (changeEvent) {

    let filesPromises = []

    if (changeEvent.target && changeEvent.target.files instanceof FileList) {

      let files = Array.from(changeEvent.target.files)

      files.forEach((file) => {
        let promise = image.readAsDataURL(file).then((result) => file.dataURL = result)
        filesPromises.push(promise)
      })
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
