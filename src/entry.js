import angular from 'angular'
import app from './app'
import 'bootstrap-webpack'
import './directives/filesSelected/index'
import './factories/images'
import './helper/image'
import './partial/home/index'

angular.bootstrap(document, [app.name])
