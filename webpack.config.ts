import * as path from 'path';

const config = {
    entry: {
        "HelloWorldFunction/helloWorldFunction": "./src/app.ts"
    },
    mode: 'development',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },
};

export default config;
