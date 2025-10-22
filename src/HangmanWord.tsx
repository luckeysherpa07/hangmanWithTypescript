export function HangmanWord() {
    const word = "hangman"
    const guessedLetters = ["h", "a", "n"]
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
            {word.split("").map((letter, index) => (
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
                            visibility: guessedLetters.includes(letter)
                                ? "visible"
                                : "hidden",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}
