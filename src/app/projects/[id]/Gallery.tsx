'use client'

import useLightbox from "@/app/ui/photography/useLightbox"
import { ModrinthMod } from "@/app/lib/publishers"

type GalleryEntry = ModrinthMod['gallery'][number]

export default function GallerySection({ gallery }: { gallery?: GalleryEntry[] }) {
    const { openLightbox, renderLightbox } = useLightbox()
    if ((gallery?.length ?? 0) == 0)
        return undefined

    return (
        <section className="normal-page">
            <h1>Gallery</h1>

            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(20rem,1fr))] gap-4 place-items-center">
                {gallery!.map((entry, idx) => (
                    <article
                        className="flex flex-col justify-between items-center bg-background-light rounded-2xl w-full h-full cursor-pointer transition-all duration-[250ms] hover:scale-105 hover:shadow-[0_0_2rem_rgba(0,0,0,0.5)] hover:z-10"
                        onClick={() => openLightbox(idx)}
                        key={idx}>
                        <img src={entry.url} className="w-full h-auto rounded-t-2xl" alt={entry.title} loading="lazy" />
                        <div className="text-center px-4 py-2 my-auto [&_h4]:my-2 [&_p]:my-[0.8rem]">
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
