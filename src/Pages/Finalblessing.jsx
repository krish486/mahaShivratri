
import hanumaji from "../assets/hanumanji.png"
import shivaji from "../assets/shivaji.png"
import mrdeveloper from "../assets/Mr.Developer.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Link } from "react-router-dom"

const Finalblessing = () => {
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(".blessing .image img", {
      y: 50,
      opacity: 0,
      stagger: 1,
      duration: 4,
      ease: "power4.out"
    })
  }, [])
  return (
    <div className="blessing">
      <div className="image">
        <img src={hanumaji} alt="hanumaji" />
        <img src={shivaji} alt="Shivji" />
        <img src={mrdeveloper} alt="" />
      </div>
      <Link to="/"><button>Back</button></Link>
    </div>
  )
}

export default Finalblessing
