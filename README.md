# vite-plugin-strip-html-comments

[Github](https://github.com/zadeviggers/vite-plugin-strip-html-comments) | [JSR](https://jsr.io/@zade/vite-plugin-strip-html-comments)

Strip HTML comments from your Vite output. It also works as an Astro integration.

> Note that due to me not bothering, this will remove your ability to stream responses in Astro, as the plugin will `await` the whole body text and run a regex on it before sending it onwards. It might also break your ability to send non-text data (i.e. images) from SSR pages. Maybe just don't use this for an SSR site, only use it for SSGs.

### Installation

I've only published this on JSR because it's so tiny I can't be bothered setting up a build process for NPM.

```sh
deno add @zade/vite-plugin-strip-html-comments
# OR
npx jsr add @zade/vite-plugin-strip-html-comments
# OR
pnpm dlx jsr add @zade/vite-plugin-strip-html-comments
```

### Usage

```ts
import { stripHTMLComments } from "@zade/vite-plugin-strip-html-comments";

// Anywhere
const cleanHTML: string = stripHTMLComments(commentedHTML);

// vite.config.js
export default defineConfig({
	plugins: [stripHTMLComments()],
});

// astro.config.js
export default defineConfig({
	integrations: [stripHTMLComments()],
});
```
