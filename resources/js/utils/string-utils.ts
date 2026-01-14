export function humanize(str: string): string {
    return str
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
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
