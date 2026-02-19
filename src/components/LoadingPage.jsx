import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const LoadingPage = ({ onComplete }) => {

    const loaderRef = useRef(null)

    useGSAP(() => {
        let tl = gsap.timeline({
            onComplete: onComplete
        })

        tl.from(".load", {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        })

        tl.to(".load", {
            scaleY: 0,
            transformOrigin: "bottom",
            duration: 1,
            stagger: 0.2,
            ease: "power4.in"
        })

    }, { scope: loaderRef })

    return (
        <>
            <div className="loaders" ref={loaderRef}>
                <div className="load"><h1>Om</h1></div>
                <div className="load"><h1>Namah</h1></div>
                <div className="load"><h1>Shivay!!</h1></div>
            </div>

        </>
    )
}

export default LoadingPage