import { useRef } from 'react';
import styles from './TypingArea.module.css';

function TypingArea({
  paragraph,
  typedText,
  onInputChange,
  onInputFocus,
  isDisabled,
}) {
  const inputRef = useRef(null);

  return (
    <div className={styles.typingWrapper}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Start typing here..."
        className={styles.input}
        value={typedText}
        onChange={e => onInputChange(e.target.value)}
        onFocus={onInputFocus}
        disabled={isDisabled}
      />
      <p className={styles.paragraph} onClick={() => inputRef.current.focus()}>
        {paragraph.split('').map((char, index) => {
          let className = '';

          if (index < typedText.length) {
            className =
              typedText[index] === char ? styles.correct : styles.incorrect;
          }

          if (index === typedText.length) {
            className += ` ${styles.active}`;
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
