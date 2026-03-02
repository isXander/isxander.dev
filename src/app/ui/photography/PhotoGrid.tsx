'use client'

import Image from "next/image"
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
            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(20rem,1fr))] [grid-auto-rows:20rem] gap-4">
                {photos.map((photo, idx) => (
                    <div
                        className="relative w-full h-full cursor-pointer transition-transform duration-[250ms] ease-in-out hover:scale-105"
                        key={idx}
                        onClick={() => openLightbox(idx)}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
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
