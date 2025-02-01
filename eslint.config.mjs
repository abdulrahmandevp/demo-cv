import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import next from "eslint-plugin-next";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended, // Standard JS rules
  ts.configs.recommended, // TypeScript rules
  next.configs.recommended, // Next.js specific rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
    },
  },
  prettier, // Disable ESLint rules that conflict with Prettier
  {
    rules: {
      "no-console": "warn", // Warns for console logs
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "prettier/prettier": "error", // Enforce Prettier formatting
    },
  },
];
