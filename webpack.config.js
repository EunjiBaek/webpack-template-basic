// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

// export __dirname(현재파일이 있는 경로)
module.exports = {
    // parcel index.html
    // 파일을 읽어들이기 시작하는 진입점 설정
    // entry: {
    //     home: './home.js',
    //     about: './about.js',
    //     contact: './contact.js',
    //   },
    entry: './js/main.js',

    // 결과물을 반환하는 설정 절대경로 명시
    // clean: true 기존에 있던것을 지워준다.
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                // css로끝나는 문자를 찾는다
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}










