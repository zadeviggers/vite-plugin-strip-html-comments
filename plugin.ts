/**
 * Vite plugin to strip HTML comments from the entrypoint HTML files.
 * @type {import('vite').Plugin}
 */
export function stripHTMLComments(): {
  name: string;
  transformIndexHtml: (html: string) => string;
} {
  return {
    name: "vite-plugin-strip-html-comments",
    transformIndexHtml(html) {
      return html.replace(/(?=<!--)([\s\S]*?)-->/g, "");
    },
  };
}
