import { useEffect, useState } from 'react';
import './App.css';
import paragraphs from './utils/paragraphs';
import TypingArea from './components/TypingArea';
import Stats from './components/Stats';

const getRandomParagraph = () => {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)];
};

function App() {
  const [paragraph, setParagraph] = useState(getRandomParagraph());
  const [typedText, setTypedText] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerStarted, setTimerStarted] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    setParagraph(getRandomParagraph());
  }, []);

  useEffect(() => {
    if (!timerStarted || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timerStarted, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      alert("Time's up!");
    }
  }, [timeLeft]);

  const handleInputFocus = () => {
    if (!timerStarted) setTimerStarted(true);
  };

  const handleTyping = text => {
    if (!timerStarted) setTimerStarted(true);

    let newMistakes = 0;
    text.split('').forEach((char, index) => {
      if (char !== paragraph[index]) {
        newMistakes++;
      }
    });

    setMistakes(newMistakes);
    setTypedText(text);

    const wordsTyped = text.length / 5;
    const timePassed = (60 - timeLeft) / 60;
    setWpm(timePassed > 0 ? Math.round(wordsTyped / timePassed) : 0);
  };

  const resetGame = () => {
    setParagraph(getRandomParagraph());
    setTypedText('');
    setTimeLeft(60);
    setTimerStarted(false);
    setMistakes(0);
    setWpm(0);
  };

  return (
    <div className="appWrapper">
      <TypingArea
        paragraph={paragraph}
        typedText={typedText}
        onInputChange={handleTyping}
        onInputFocus={handleInputFocus}
        isDisabled={timeLeft === 0}
      />
      <Stats
        timeLeft={timeLeft}
        mistakes={mistakes}
        wpm={wpm}
        onReset={resetGame}
      />
    </div>
  );
}

export default App;
