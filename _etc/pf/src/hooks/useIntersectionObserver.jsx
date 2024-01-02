import { useState, useEffect, useRef } from 'react'

const useIntersectionObserver = (threshold = 0.5) => {
    const [isVisible, setIsVisible] = useState(false)
    const animatedElementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(entry.target)
                    } else {
                        setIsVisible(false)
                    }
                })
            },
            { threshold },
        )

        if (animatedElementRef.current) {
            observer.observe(animatedElementRef.current)
        }

        return () => {
            if (animatedElementRef.current) {
                observer.unobserve(animatedElementRef.current)
            }
        }
    }, [threshold])

    return { animatedElementRef, isVisible }
}

export default useIntersectionObserver
