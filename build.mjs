import esbuild from "esbuild";
import extensibilityMap from "@neos-project/neos-ui-extensibility/extensibilityMap.json" with { type: "json" };
import stylexPlugin from "@stylexjs/esbuild-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("esbuild").BuildOptions} */
const options = {
    logLevel: "info",
    bundle: true,
    minify: true,
    sourcemap: false,
    target: "es2020",
    format: "iife",
    legalComments: "none",
    entryPoints: {
        Plugin: "Resources/Private/Editor/manifest.js",
    },
    loader: {
        ".js": "tsx",
    },
    outdir: "Resources/Public",
    alias: extensibilityMap,
    plugins: [
        stylexPlugin({
            classNamePrefix: "newsletter-",
            useCSSLayers: false,
            dev: false,
            generatedCSSFileName: path.resolve(__dirname, "Resources/Public/Plugin.css"),
            stylexImports: ["@stylexjs/stylex"],
        }),
    ],
};

// eslint-disable-next-line no-undef
if (process.argv.includes("--watch")) {
    esbuild.context(options).then((ctx) => ctx.watch());
} else {
    esbuild.build(options);
}
