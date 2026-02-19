import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Finalblessing from './Finalblessing'
import { Link } from 'react-router-dom'

const Awenkingscreen = () => {
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to('.center', {
      scale: 140,
      duration: 3,
      ease: 'power4.inOut'
    })

    tl.to('.gradient-bg', {
      opacity: 1,
      duration: 3,
      ease: 'power4.inOut'
    }, 0)

    tl.fromTo('.text h1',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.inOut' },
      2.5
    )

    tl.fromTo('.text h3',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.inOut' },
      3
    )
    tl.fromTo('.text button',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.inOut' },
      3
    )

  }, [])

  return (
    <div className="awenking">
      <div className="center">
        <div className="gradient-bg">
        </div>
      </div>
      <div className="text">
        <h1>𝕊𝕙𝕚𝕧𝕠𝕙𝕒𝕞</h1>
        <h3>I am Concious</h3>
        <Link to="/finalblessing">
          <button>Continue</button>
        </Link>
      </div>
    </div>
  )
}

export default Awenkingscreen
