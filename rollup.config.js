const path =require('path');
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
const json = require("@rollup/plugin-json");
const { babel, getBabelOutputPlugin } = require("@rollup/plugin-babel");
const  external=require('@yelo/rollup-node-external');
import replace from '@rollup/plugin-replace';
// 开发环境or生产环境
const NODE_ENV = process.env.NODE_ENV
// 判断是是否为生产环境
const isPro = function () {
    return NODE_ENV === 'production'
}

export default {
    input:path.resolve(__dirname,'./src/app.js'),
    output:{
        file:path.resolve(__dirname,'./dest/serve.js'),
        format:'cjs'
    },
    external:external(),
    plugins:[
        json(),
        nodeResolve(),
        commonjs(),
        getBabelOutputPlugin({
            presets: [["@babel/preset-env", { targets: { node: "current" } }]],
            plugins: [["@babel/plugin-transform-runtime"]],
        }),
        babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        }),
    ]
};
