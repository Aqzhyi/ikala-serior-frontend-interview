import app from '../../app'

app.directive('filesDrop', () => {
  return {
    restrict: 'A',
    controllerAs: 'vm',
    controller,
    scope: {
      filesDrop: '&'
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
  $element.on('dragover.filesDrop', fileDragover)
  $element.on('drop.filesDrop', fileDrop)

  $scope.$on('destory', () => {
    $element.off('dragover.filesDrop')
    $element.off('drop.filesDrop')
  })

  function fileDrop(event) {
    fileDragover(event)

    let dt = event.originalEvent.dataTransfer
    let files = dt && dt.files || null

    let promises = [].reduce.call(files, (prev, file) => {
      let promise = image.readAsDataURL(file).then((dataURL) => file.dataURL = dataURL)
      prev.push(promise)
      return prev
    }, [])

    $q.all(promises).then(() => $scope.filesDrop({$files: files}))
  }

  function fileDragover(event) {
    event.stopPropagation()
    event.preventDefault()

    if (event.type == 'dragover') {
      $element.css('outline', '1px dashed #999')
    }
    else {
      $element.css('outline', 'none')
    }
  }
}
