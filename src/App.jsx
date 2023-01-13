import { useState, useTransition } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const LIST_SIZE = 20000

    function handleChange(e) {
        setInput(e.target.value)
         //setTransition includes low priority code
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }
    return (
        <div className="App">
            <input type="text" value={input} onChange={handleChange} />
            {isPending ? (
                <h4>Loading...</h4>
            ) : (
                list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            )}
        </div>
    )
}

export default App
