import styles from "./Button.module.css";

function Button({ type, children, handleClick }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
