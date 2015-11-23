import app from '../../app'

app.directive('filesDrop', [
  '$q',
  '$parse',
  'image',
  directive
])

function directive($q, $parse, image) {
  return {
    restrict: 'A',
    scope: false,
    link,
  }

  function link($scope, $element, $attrs) {
    $element.addClass('filesDrop')
    $element[0].addEventListener('dragleave', fileDragleave)
    $element[0].addEventListener('dragover', fileDragover)
    $element[0].addEventListener('drop', fileDrop)

    $scope.$on('$destroy', () => {
      $element[0].removeEventListener('dragleave', fileDragleave)
      $element[0].removeEventListener('dragover', fileDragover)
      $element[0].removeEventListener('drop', fileDrop)
    })

    function fileDrop(event) {
      event.stopPropagation()
      event.preventDefault()

      let dt = event.dataTransfer
      let files = dt && dt.files || null

      if (!files) {
        $parse($attrs.filesDrop)($scope, {
          $files: [],
          $event: event,
        })

        fileDragleave(event)

        return
      }

      let promises = [].reduce.call(files, (prev, file) => {
        let promise = image.readAsDataURL(file).then((dataURL) => file.dataURL = dataURL)
        prev.push(promise)
        return prev
      }, [])

      $q.all(promises).then(() => {
        $parse($attrs.filesDrop)($scope, {
          $files: files,
          $event: event,
        })

        fileDragleave(event)
      })
    }

    function fileDragover(event) {
      event.stopPropagation()
      event.preventDefault()
      $element.addClass('filesDrop--dragover')
    }

    function fileDragleave() {
      $element.removeClass('filesDrop--dragover')
    }
  }
}
