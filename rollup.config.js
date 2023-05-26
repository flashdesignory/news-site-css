import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-import-css";
import copy from "rollup-plugin-copy";
import cleaner from 'rollup-plugin-cleaner';
import html from '@rollup/plugin-html';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/js/index.js",
    output: [
        {
            file: "dist/index.js",
            format: "es",
        },
    ],
    plugins: [
        cleaner({
            targets: [
              './dist/'
            ]
        }),
        css({
            minify: true,
            output: "dist/index.min.css"
        }),
        babel({
            babelrc: false,
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        copy({
            targets: [
                {
                    src: ["src/css/index.css"],
                    dest: "dist/"
                },
                {
                    src: ["src/css/*", "!src/css/index.css", "!src/css/partials.css", "!src/css/global.css"],
                    dest: "dist/",
                   rename: (name, extension) => `${name}.module.${extension}`
                },
                {
                    src: ["src/css/*", "!src/css/index.css"],
                    dest: "dist/",
                }
            ]
        }),
        html(),
        production && terser(),
    ],
};