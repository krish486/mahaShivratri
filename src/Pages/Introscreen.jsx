import om from "../assets/om.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import Background from "../components/Background"

const Introscreen = () => {

    const containerRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {

        const tl = gsap.timeline()

        tl.from(imageRef.current, {
            scale: 0,
            opacity: 0,
            duration: 2,
            ease: "back.out(1.7)"
        })

        tl.from(".word", {
            y: -40,
            opacity: 0,
            stagger: 0.8,
            duration: 1
        })

    }, { scope: containerRef })

    return (
        <>
            <div className="intro" ref={containerRef}>
                <div className="om">
                    <img ref={imageRef} src={om} alt="Om" />
                </div>

                <h1 className="text_intro">
                    {"Maha Shivratri 2026".split(" ")
                        .map((word, index) => (
                            <span key={index} className="word">
                                {word}&nbsp;
                            </span>
                        ))
                    }
                </h1>

                <Link to="/awakening">
                    <button>
                        Tap to Begin
                    </button>
                </Link>
            </div>
            <Background elem={containerRef} />
        </>
    )
}

export default Introscreen