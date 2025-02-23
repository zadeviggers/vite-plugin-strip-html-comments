// import { defineMiddleware } from "astro:middleware";
import { stripHTMLComments as stripHTMLCommentsCore } from "./core.ts";
import type { MiddlewareHandler } from "astro";

/**
 * This is an internal middleware injected by the plugin when used as an Astro integration. You really shouldn't need to use it.
 * @module
 */
export const onRequest: MiddlewareHandler = async (_context, next) => {
	const ogRes: Response = await next();

	try {
		const ogBody = await ogRes.text();
		const newBody = stripHTMLCommentsCore(ogBody);

		const newRes = new Response(newBody, ogRes);
		return newRes;
	} catch (err) {
		console.warn(err);
		return ogRes;
	}
};
