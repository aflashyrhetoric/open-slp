export function humanize(str: string): string {
    return str
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

// sentence case
export function sentenceCase(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getDomainFromUrl(url: string): string | null {
    try {
        // Add protocol if missing to ensure URL constructor works
        const urlWithProtocol = url.match(/^https?:\/\//) ? url : `https://${url}`;
        const parsedUrl = new URL(urlWithProtocol);
        return parsedUrl.hostname.replace(/^www\./, '');
    } catch {
        return null;
    }
}
