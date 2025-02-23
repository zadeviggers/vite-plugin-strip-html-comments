export function stripHTMLComments(input: string): string {
	return input.replace(/(?=<!--)([\s\S]*?)-->/g, "");
}
