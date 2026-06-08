import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

// `next lint` was removed in Next.js 16, so we run ESLint directly using a flat
// config. FlatCompat loads the same shareable config the project used before
// (next/core-web-vitals), keeping the exact same rule set.
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...compat.extends("next/core-web-vitals"),
];

export default eslintConfig;
