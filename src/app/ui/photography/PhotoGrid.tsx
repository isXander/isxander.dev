'use client'

import Image from "next/image"
import styles from "./PhotoGrid.module.scss"
import useLightbox from "./useLightbox"

export type PhotoEntry = {
    src: string,
    alt: string,
    width?: number,
    height?: number,
    camera?: {
        model: string,
        settings: string,
    }
}

export default function PhotoGrid({
    photos
}: { photos: PhotoEntry[] }) {
    const { openLightbox, renderLightbox } = useLightbox()

    return (
        <div>
            <div className={styles.grid}>
                {photos.map((photo, idx) => (
                    <div className={styles.entryContainer} key={idx} onClick={() => openLightbox(idx)}>
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className={styles.entry}
                            quality={60}
                            sizes={"500px"}
                        />
                    </div>
                ))}
            </div>

            {renderLightbox({
                slides: photos.map(photo => {
                    return {
                        src: photo.src,
                        alt: photo.alt,
                        width: photo.width,
                        height: photo.height,
                    }
                })
            })}
        </div>
    )
}