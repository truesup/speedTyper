import styles from './Stats.module.css';

function Stats({ timeLeft, mistakes, wpm, onReset }) {
  return (
    <div className={styles.statsWrapper}>
      <div className={styles.statItem}>
        <p>⏳ Time Left:</p>
        <span>{timeLeft}s</span>
      </div>
      <div className={styles.statItem}>
        <p>❌ Mistakes:</p>
        <span>{mistakes}</span>
      </div>
      <div className={styles.statItem}>
        <p>🚀 WPM:</p>
        <span>{wpm}</span>
      </div>
      <button className={styles.resetButton} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Stats;
