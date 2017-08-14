const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'self.ts'),
    output: {
        path:  path.join(__dirname, 'dist'),
        filename: "bundle.self.js"        
    },
    resolve: {    
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};