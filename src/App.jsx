import { Route, Routes, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

import Introscreen from "./Pages/Introscreen"
import LoadingPage from "./components/LoadingPage"
import AwakeningScreen from "./Pages/Awenkingscreen"
import Finalblessing from "./Pages/Finalblessing"
import Background_music from "./components/Background_music"

const App = () => {

  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const audioRef = useRef(null)

  useEffect(() => {
    setLoading(true)
  }, [location.pathname])

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  return (
    <>
      {/* Music Component */}
      <Background_music ref={audioRef} />

      {/* Play Button */}
      <button onClick={handlePlayMusic} className="music">
        Play Music
      </button>

      {loading && (
        <LoadingPage onComplete={() => setLoading(false)} />
      )}

      {!loading && (
        <Routes>
          <Route path="/" element={<Introscreen />} />
          <Route path="/awakening" element={<AwakeningScreen />} />
          <Route path="/finalblessing" element={<Finalblessing />} />
        </Routes>
      )}
    </>
  )
}

export default App