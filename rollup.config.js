import typescript from "@rollup/plugin-typescript";
import svgr from '@svgr/rollup';
import url from "@rollup/plugin-url";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [typescript(), url(), svgr()],
};
