## Structure

This app is based-on Ruby on Rails. The extra folders `src` is written in ES2015 and will be compiled into `./app/assets/javascripts/home.js` using **webpack** as a bundle.

## To develop

type `rails server && webpack --progress --colors --watch` and open `http://0.0.0.0:3000` to start develop single page application with **webpack**.
