export default defineEventHandler(async (event) => {
    const urlObj = getRequestURL(event)

    console.log(urlObj.pathname)
    if (urlObj.pathname.startsWith('/mods')) {
        console.log(urlObj.pathname.replace(/^\/mods/, '/projects'))
        await sendRedirect(event, urlObj.pathname.replace(/^\/mods/, '/projects'), 301)
    }
})
