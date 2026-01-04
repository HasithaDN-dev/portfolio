/* eslint-env node */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Load environment variables for the current mode so BASE_URL from
// .env.production is applied when running `vite build` in CI.
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    base: env.BASE_URL || "/",
    plugins: [react()],
  });
};
