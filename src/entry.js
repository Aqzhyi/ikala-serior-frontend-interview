import angular from 'angular'
import app from './app'
import 'bootstrap-webpack'
import './directives/filesDrop/index'
import './directives/filesPaste/index'
import './directives/filesSelected/index'
import './factories/images'
import './helper/image'
import './partial/home/index'

angular.bootstrap(document, [app.name])
