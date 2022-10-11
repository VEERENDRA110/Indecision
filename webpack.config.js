const path = require('path');
module.exports = {
    entry: './src/main.js',    
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              options: { presets: ['@babel/preset-env','@babel/preset-react'] },
            },
            {
                test:/\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        static:path.join(__dirname, 'public')
    },
    mode:'development'
};