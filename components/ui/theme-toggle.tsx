import * as React from "react"
import { MoonStar, SunDim } from "lucide-react"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-transparent w-9 h-9">
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            className="rounded-full hover:bg-transparent w-9 h-9 relative overflow-hidden"
        >
            <AnimatePresence mode="wait" initial={false}>
                {resolvedTheme === "light" ? (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: -90, scale: 0 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <MoonStar className="h-[1.2rem] w-[1.2rem] text-blue-500" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: -90, scale: 0 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <SunDim className="h-[1.2rem] w-[1.2rem] text-orange-500" />
                    </motion.div>
                )}
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
