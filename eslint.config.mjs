import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Turn off unused vars completely
      "@typescript-eslint/no-unused-vars": "off",

      // OR: Warn instead of error
      // "@typescript-eslint/no-unused-vars": ["warn"],

      // OR: Ignore unused vars starting with '_'
      // "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }]
    },
  },
];

export default eslintConfig;
