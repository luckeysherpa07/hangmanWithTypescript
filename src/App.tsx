import { useState } from "react"
import words from "./wordList.json"

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    })
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    console.log(wordToGuess)
    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "center",
            }}
        >
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
                Lose Win
            </div>
            <HangmannDrawing />
            <HangmanWord />
            <Keyboard />
        </div>
    )
}

export default App
