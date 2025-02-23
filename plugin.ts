import { stripHTMLComments as stripHTMLCommentsCore } from "./core.ts";
import type { Plugin as VitePlugin } from "vite";
/**
 * Vite + Astro plugin to strip HTML comments from the entrypoint HTML files.
 * Also can be used as a string utility.
 *
 * @example
 * ```ts
 * // Anywhere
 * const cleanHTML: string = stripHTMLComments(HTMLWithComments);
 *
 * // vite.config.js
 * export default defineConfig({
 * 	plugins: [stripHTMLComments()],
 * });
 *
 * // astro.config.js
 * export default defineConfig({
 * 	integrations: [stripHTMLComments()],
 * });
 * ```
 */
export function stripHTMLComments(input: string): string;
export function stripHTMLComments(): VitePlugin;
export function stripHTMLComments(input?: string): VitePlugin | string {
	if (input !== undefined) {
		return stripHTMLCommentsCore(input);
	}
	return {
		name: "vite-plugin-strip-html-comments",
		// Normal vite stuff
		transformIndexHtml: stripHTMLCommentsCore,

		// transformIndexHtml doesn't run in Astro - we need to inject a middleware
		// @ts-expect-error blah
		"astro:config:setup": ({ addMiddleware }) => {
			addMiddleware({
				entrypoint:
					"@zade/vite-plugin-strip-html-comments/__internal-astro-middleware",
				order: "post",
			});
		},
	};
}
