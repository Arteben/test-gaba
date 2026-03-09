import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import esReact from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  {
    files: ['./src/**/*.{ts,tsx}'],
    plugins: {
      react: esReact,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-console": "off",
      "no-debugger": "off",
      "no-trailing-spaces": "error",
      "no-undef": "off",
      "no-useless-escape": "off",
      "semi": ["error", "never"],
      "no-empty-function": "off",
      "no-multiple-empty-lines": "error",
      "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never"
      }],


      "no-multiple-empty-lines": ["error", {
        "max": 2,
        "maxEOF": 0,
      }],

      "quotes": ["error", "single", { "allowTemplateLiterals": true }],

      "@typescript-eslint/prefer-as-const": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
])
