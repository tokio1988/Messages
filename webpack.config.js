const path = require('path');

 

const ROOT = path.resolve( __dirname, 'src' );
const DEST = path.resolve( __dirname, 'dist' );

 

module.exports = {

 

    entry: path.join(ROOT, '/app.ts'),
    output: {
        filename: 'app.js',
        path: DEST
        //path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};