import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Introscreen from "./Pages/Introscreen"
import LoadingPage from "./components/LoadingPage"
import AwakeningScreen from "./Pages/Awenkingscreen"
import Finalblessing from "./Pages/Finalblessing"
import { useEffect } from "react"

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  }, [location.pathname])

  return (
    <>
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