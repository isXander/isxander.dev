'use client'

import { useEffect, useState } from "react";

export type CurrentTimeProps = {
    timezone: string,
    format: "short" | "medium" | "long" | "full",
    hour12: boolean
}

export default function CurrentTime({
    timezone, format = "short", hour12 = true
} : CurrentTimeProps) {
    const timeGetter = () => {
        const date = new Date()
        return date.toLocaleTimeString('en-US', { timeZone: timezone, timeStyle: format, hour12: hour12 })
    }

    const [time, setTime] = useState(timeGetter());

    useEffect(() => {
        const intervalId = setInterval(() => setTime(timeGetter()), 1000)
        return () => clearInterval(intervalId)
    })

    return <code>{time}</code>
}