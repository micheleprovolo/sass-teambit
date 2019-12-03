let mix = require('laravel-mix');

mix
.js('src/js/main.js', 'public/js')
.sass('src/scss/style.scss', 'public/css')
.copyDirectory('src/html', 'public')
;