import angular from 'angular'
import app from './app'
import 'bootstrap-webpack'
import './factories/images'
import './helper/image'
import './home/index'

angular.bootstrap(document, [app.name])
