import { stripHTMLComments as stripHTMLCommentsCore } from "./core.ts";

/**
 * Vite plugin to strip HTML comments from the entrypoint HTML files.
 * @type {import('vite').Plugin}
 */
export function stripHTMLComments(input: string): string;
export function stripHTMLComments(): {
	name: string;
	transformIndexHtml: (html: string) => string;
};
export function stripHTMLComments(input?: string):
	| {
			name: string;
			transformIndexHtml: (html: string) => string;
	  }
	| string {
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
