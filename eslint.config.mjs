import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  extends: ["next", "next/core-web-vitals"],
  rules: {
    "react/jsx-key": "warn",
    "@next/next/no-img-element": "off", // Allows using <img> tags
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
};

export default eslintConfig;
