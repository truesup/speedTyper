import { useRef } from 'react';
import styles from './TypingArea.module.css';

function TypingArea({ paragraph, typedText, onInputChange }) {
  const inputRef = useRef(null);

  return (
    <div className={styles.typingWrapper}>
      <input
        ref={inputRef}
        type="text"
        placeholder="You will type your text here. Just press on this input field or on the text."
        className={styles.input}
        value={typedText}
        onChange={e => onInputChange(e.target.value)}
      />
      <p className={styles.paragraph} onClick={() => inputRef.current.focus()}>
        {paragraph.split('').map((char, index) => {
          let className = '';

          if (index < typedText.length) {
            className =
              typedText[index] === char ? styles.correct : styles.incorrect;
          }

          if (index === typedText.length) {
            className += `${styles.active}`;
          }

          return (
            <span key={index} className={className}>
              {char}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default TypingArea;
