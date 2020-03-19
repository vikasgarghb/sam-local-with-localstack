import * as path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

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
    plugins: [
        new CopyWebpackPlugin([
	        { from: './hello-world.txt', to: 'HelloWorldFunction/hello-world.txt' }
        ],
        {
            copyUnmodified: true
        }),
    ],
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
