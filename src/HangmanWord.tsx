type HangmanWordProps = {
    wordToGuess: string
    guessedLetters: string[]
    reveal?: boolean
}

export function HangmanWord({
    wordToGuess,
    guessedLetters,
    reveal,
}: HangmanWordProps) {
    return (
        <div
            style={{
                display: "flex",
                gap: ".25em",
                fontSize: "6rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
            }}
        >
            {wordToGuess.split("").map((letter, index) => (
                <span
                    key={index}
                    style={{
                        borderBottom: ".1em solid black",
                        width: "1ch",
                        textAlign: "center",
                    }}
                >
                    <span
                        style={{
                            visibility:
                                guessedLetters.includes(letter) || reveal
                                    ? "visible"
                                    : "hidden",
                            color:
                                !guessedLetters.includes(letter) && reveal
                                    ? "red"
                                    : "black",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}
