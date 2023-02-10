import staticAdapter    from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";

import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess  (),
    sveltePreprocess(),
  ],
  kit: {
    adapter: staticAdapter(),
  },
};

export default config;
