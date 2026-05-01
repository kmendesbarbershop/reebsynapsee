// @lovable.dev/vite-tanstack-config handles: tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, componentTagger (dev-only), VITE_* env injection, @ path alias,
// React/TanStack dedupe, error logger plugins, and sandbox detection.
// Cloudflare is disabled — this project targets Vercel (Node.js runtime).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({ cloudflare: false });
