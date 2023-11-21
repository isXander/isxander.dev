export const useModrinthFetch = async <T>(path: string) => {
    return await $fetch<T>(`https://api.modrinth.com/v2${path}`)
}

export const useCurseFetch = async <T>(path: string) => {
    return await $fetch<T>(`https://api.curse.tools/v1/cf/${path}`)
}