export function removeHTMLTags (str: string): string {
    return str.replace(/<[^>]*>?/gm, '');
}
