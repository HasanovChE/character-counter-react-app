import { useState } from "react";
import UserInput from "./components/userInput/UserInput";
import CardList from "./components/cardList/CardList";
import LetterDensity from "./components/letterDensity/LetterDensity";
import Header from "./widgets/header/Header";
import "./App.css"
function App() {
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [lineCount, setLineCount] = useState(0);
    const [letterData, setLetterData] = useState([]);

    const updateCounts = (text, excludeSpaces) => {
        const processedText = excludeSpaces ? text.replace(/\s/g, "") : text;
        setCharCount(processedText.length);
        setLineCount(text ? text.split("\n").length : 0);

 const words = text.match(/\b[a-zA-Z][\w'-]*\b/g);
setWordCount(words ? words.length : 0);

        // Count letter frequencies
        const letterCounts = {};
        for (let char of processedText) {
            if (char.match(/[a-zA-Z]/)) {
                letterCounts[char] = (letterCounts[char] || 0) + 1;
            }
        }

        // Convert to array for LetterDensity
        const totalLetters = Object.values(letterCounts).reduce((a, b) => a + b, 0);
        const lettersArray = Object.entries(letterCounts).map(([letter, count]) => ({
            letter,
            count,
            percent: ((count / totalLetters) * 100).toFixed(2),
        }));

        setLetterData(lettersArray);
    };

    return (
        <div className="app">
            <Header/>
            <h2 className="text-black">Analyze your text <br /> in real-time</h2>
            <UserInput onTextChange={updateCounts} />
            <CardList charCount={charCount} wordCount={wordCount} lineCount={lineCount} />
            <LetterDensity letterData={letterData} />
        </div>
    );
}


export default App;
