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
