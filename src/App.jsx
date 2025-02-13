import { useEffect, useState } from 'react';
import './App.css';
import TypingArea from './components/TypingArea';
import paragraphs from './utils/paragraphs';

const getRandomParagraph = () => {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)];
};

function App() {
  const [paragraph, setParagraph] = useState(getRandomParagraph());

  useEffect(() => {
    setParagraph(getRandomParagraph());
  }, []);

  const [typedText, setTypedText] = useState('');

  return (
    <div className="appWrapper">
      <TypingArea
        paragraph={paragraph}
        typedText={typedText}
        onInputChange={setTypedText}
      />
    </div>
  );
}

export default App;
