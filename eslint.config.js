import eslintJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import typescriptEslintParser from "@typescript-eslint/parser";
import astroPlugin from "eslint-plugin-astro";
import sveltePlugin from "eslint-plugin-svelte";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    {
        // Ignore generated files and node_modules
        ignores: ["dist/**", "node_modules/**", ".astro/**", ".vercel/**"],
    },
    eslintJs.configs.recommended,
    ...tseslint.configs.recommended,

    // Configuration for Svelte files with TypeScript
    ...sveltePlugin.configs.recommended,
    {
        files: ["**/*.svelte"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                parser: {
                    ts: typescriptEslintParser,
                },
                extraFileExtensions: [".svelte"],
                sourceType: "module",
            },
        },
    },

    // Configuration for TypeScript files
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: typescriptEslintParser,
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
            },
        },
        rules: {
            // Relax some TypeScript rules that might be too strict
            //"@typescript-eslint/no-explicit-any": "warn",
            //"@typescript-eslint/no-empty-object-type": "warn",
        },
    },

    // Configuration for Astro files
    ...astroPlugin.configs.recommended,

    prettier,
];
