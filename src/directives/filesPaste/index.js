import app from '../../app'

app.directive('filesPaste', () => {
  return {
    restrict: 'A',
    controllerAs: 'vm',
    controller,
    scope: {
      filesPaste: '&'
    },
  }
})

controller.$inject = [
  '$scope',
  '$element',
  '$q',
  'image',
]

function controller($scope, $element, $q, image) {

  $element.on('paste.filesPaste', filesPasted)

  $scope.$on('destroy', onScopeDestroy)

  /////
  function filesPasted(event) {
    let items = event.originalEvent.clipboardData.items

    let promises = [].reduce.call(items, (prev, item) => {

      if (item.kind !== 'file' && item.type.indexOf('image') === -1) return prev

      let blob = item.getAsFile()
      blob.lastModifiedDate = blob.lastModifiedDate || new Date()
      blob.name = blob.name || `貼上的檔案-${Date.now()}`

      let promise = image.readAsDataURL(blob).then((dataURL) => {
        blob.dataURL = dataURL
        return blob
      })

      prev.push(promise)

      return prev
    }, [])

    $q.all(promises).then((files) => {
      $scope.filesPaste({ $files: files })
    })
  }

  function onScopeDestroy() {
    $element.off('paste.filesPaste')
  }
}
