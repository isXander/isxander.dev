export default function YoutubeEmbed({
    video
}: {
    video: string
}) {
    return (
        <div className="relative w-full pb-[56.25%] h-0">
            <iframe
                src={`https://www.youtube.com/embed/${video}`}
                title="Youtube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
            />
        </div>
    )
}
