var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;

var gulp = require('gulp');

elixir(function (mix) {
    // Compile sass to css
    mix.sass('resources/assets/sass/app.scss', 'resources/assets/css');

    // Combine css file
    mix.styles(
        [
            'css/app.css',
            'bower/vendor/slick-carousel/slick/slick.css'

        ], 'public/css/all.css', // Output file
        'resources/assets');

    var bowerPath = 'bower/vendor';
    mix.scripts(
        [
            // jQuery
            bowerPath + '/jquery/dist/jquery.min.js',

            // foundation js
            bowerPath + '/foundation-sites/dist/js/foundation.min.js',

            // Other dependencies
            bowerPath + '/slick-carousel/slick/slick.min.js'
        ], 'public/js/app.js', 'resources/assets'
    );
});