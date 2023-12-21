export const useLinkieSearch = async (intermediary: string, symbol: LinkieSymbolType, version: string, translate: string) => {
    return await $fetch<LinkieSearchResult>(`https://linkieapi.shedaniel.me/api/search/?namespace=mojang&query=${intermediary}&version=${version}&limit=1&allowClasses=${symbol === LinkieSymbolType.CLASS}&allowMethods=${symbol === LinkieSymbolType.METHOD}&allowFields=${symbol === LinkieSymbolType.FIELD}${translate && translate !== 'mojang' ? `&translate=${translate}` : ''}`)
}

export enum LinkieSymbolType {
    CLASS,
    METHOD,
    FIELD,
}

export interface LinkieSearchResult {
    entries: {[key: string]: any}[]
}