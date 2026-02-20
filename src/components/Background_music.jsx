import { forwardRef } from "react"
import music from "../assets/Shiv_Tandav_Stotram.mp3"

const Background_music = forwardRef((props, ref) => {
    return (
        <audio ref={ref} loop>
            <source src={music} type="audio/mpeg" />
        </audio>
    )
})

export default Background_music