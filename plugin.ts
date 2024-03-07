export function stripHTMLComments() {
  return {
    name: "vite-plugin-strip-html-comments",
    transformIndexHtml(html) {
      return html.replace(/(?=<!--)([\s\S]*?)-->/g, "");
    },
  };
}
