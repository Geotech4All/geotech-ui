export default function validateFiles(accept: string, file: File): boolean {
    const extensions: string[] = [];
    const accepts = accept.trim().split(",").map(item => item.trim())
    accepts.forEach(accept => extensions.push(String(accept.split("/").pop()?.trim())));
    const fileExtension = String(file.name.trim().split(".").pop()?.trim());
    if (extensions.includes(fileExtension)) { return true }
    return false
}
