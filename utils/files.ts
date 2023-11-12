const FILENAME_RE = /(^|[/\\])([^/\\]+?)(?=(\.[^.]+)?$)/;

export const getFileName = (path: string) => {
    return path.match(FILENAME_RE)?.[2];
};