// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://ph3ynyxstudio-source.github.io",
  base: isGitHubActions ? "/Ph3yNyx.Portfolio" : undefined,
});
