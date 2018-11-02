import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import { resolve as pathResolve } from "path";

export default [
  {
    input: "src/echarts.js",
    output: {
      dir: "dist",
      file: "echarts.js",
      name: "echarts_js",
      format: "iife"
    },
    plugins: [
      json(),
      resolve({
        extensions: [".js", ".jsx", ".json"]
      }),
      commonjs(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  },
  {
    input: "src/react.js",
    output: {
      dir: "dist",
      file: "react.js",
      name: "react_js",
      format: "iife"
    },
    plugins: [
      json(),
      resolve({
        extensions: [".js", ".jsx", ".json"]
      }),
      commonjs(),
      babel({
        exclude: "node_modules/**"
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    ]
  },
  {
    input: "src/index.jsx",
    output: {
      dir: "dist",
      file: "index.js",
      format: "iife",
      globals: {
        echarts: "echarts",
        react: "react",
        "react-dom": "reactDOM"
      }
    },
    // external: [pathResolve("./src/echarts.js"), pathResolve("./src/react.js")],
    // external: ["echarts", "react", "react-dom"],
    plugins: [
      json(),
      resolve({
        extensions: [".js", ".jsx", ".json"]
      }),
      commonjs({
        namedExports: {
          "node_modules/react/index.js": [
            "Children",
            "Component",
            "PropTypes",
            "createElement",
            "PureComponent"
          ],
          "node_modules/react-dom/index.js": ["render"]
        }
      }),
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
];
