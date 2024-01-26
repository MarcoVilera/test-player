import "../styles/buttons.css"
import { IoPlayBack, IoPlay, IoPlayForward, IoPause } from "react-icons/io5"
import { IconContext } from "react-icons"
import { useState } from "react"
export function Buttons() {
    const [isPlaying, setIsPlaying] = useState(true)
    const state = isPlaying ? <IoPlay /> : <IoPause />
    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }
    return (
        <div className="buttons">
            <button className="btns-back">
                <IconContext.Provider value={{ color: "#458aec", size: "25px", className: "pl-buttons" }}>
                    <IoPlayBack />
                </IconContext.Provider>
            </button>
            <button className="btns-play" onClick={handleClick}>
                <IconContext.Provider value={{ color: "#458aec", size: "25px", className: "pl-buttons" }}>{state}</IconContext.Provider>
            </button>
            <button className="btns-next">
                <IconContext.Provider value={{ color: "#458aec", size: "25px", className: "pl-buttons" }}>
                    <IoPlayForward />
                </IconContext.Provider>
            </button>
        </div>
    )
}
