const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'app.ts'),
    output: {
        path:  path.join(__dirname, 'dist'),
        filename: "bundle.js",
        libraryTarget: "amd" 
    },
    resolve: {    
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    externals: [
        'single-spa-angular2',
        /^@angular\//,        
        /^rxjs\//,        
        ]
};