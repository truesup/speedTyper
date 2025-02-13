import styles from './TypingArea.module.css';

function TypingArea({ paragraph, typedText, onInputChange }) {
  return (
    <div className={styles.typingWrapper}>
      <input
        type="text"
        className={styles.input}
        value={typedText}
        onChange={e => onInputChange(e.target.value)}
      />
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
}

export default TypingArea;
