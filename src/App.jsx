import "./App.css"
import { Playing } from "./components/playing"
import { Panel } from "./components/panel"
import { Buttons } from "./components/buttons"
function App() {
    return (
        <>
            <Panel />
            <Playing title="title" artist="artist" />
            <Buttons />
        </>
    )
}

export default App
