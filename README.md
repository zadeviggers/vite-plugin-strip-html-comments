# vite-plugin-strip-html-comments

[Github](https://github.com/zadeviggers/vite-plugin-strip-html-comments) | [JSR](https://jsr.io/@zade/vite-plugin-strip-html-comments)

Strip HTML comments from your Vite output.

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

export default defineConfig({
  plugins: [stripHTMLComments()],
});
```
