'use client'

import useLightbox from "@/app/ui/photography/useLightbox"
import { SectionProps } from "./page"
import styles from "./page.module.scss"

export default function GallerySection({
    project: { local, modrinth, curseforge }
}: SectionProps) {
    const gallery = modrinth?.gallery
    if ((gallery?.length ?? 0) == 0) 
        return undefined

    const { openLightbox, renderLightbox } = useLightbox()

    return (
        <section className="normal-page">
            <h1>Gallery</h1>

            <div className={styles.galleryGrid}>
                {gallery!.map((entry, idx) => (
                    <article 
                        className={styles.galleryEntry}
                        onClick={() => openLightbox(idx)}
                        key={idx}>
                            <img src={entry.url} className={styles.galleryImage} alt={entry.title} loading="lazy" />
                            <div className={styles.galleryMeta}>
                                <h4>{entry.title}</h4>
                                <p>{entry.description}</p>
                            </div>
                    </article>
                ))}
            </div>

            {renderLightbox({
                slides: gallery!.map(entry => {
                    return {
                        src: entry.url,
                        alt: entry.title,
                    }
                })
            })}
        </section>
    )
}