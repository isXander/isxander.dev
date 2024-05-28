import styles from "./YoutubeEmbed.module.scss"

export default function YoutubeEmbed({
    video
} : {
    video: string
}) {
    return (
        <div className={styles.youtube}>
            <iframe 
                src={`https://www.youtube.com/embed/${video}`} 
                title="Youtube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    )
}