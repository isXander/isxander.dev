'use client'

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { LightboxExternalProps } from "yet-another-react-lightbox";

const Lightbox = dynamic(() => import("./Lightbox"))

export default function useLightbox() {
    const [open, setOpen] = useState(false)
    const [interactive, setInteractive] = useState(false)
    const [index, setIndex] = useState(0)

    const openLightbox = (index: number) => {
        setOpen(true)
        setInteractive(true)
        setIndex(index)
    }

    const renderLightbox = useCallback(
        (props?: Omit<LightboxExternalProps, "open" | "close">) =>
            interactive ? (
                <Lightbox 
                    open={open} 
                    close={() => setOpen(false)} 
                    index={index}
                    {...props} 
                />
            ) : null,
        [open, interactive, index]
    )

    return { openLightbox, renderLightbox }
}