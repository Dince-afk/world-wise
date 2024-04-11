import styles from "./Button.module.css";

function Button({ type, children }) {
  return <div className={`${styles.btn} ${styles[type]}`}>{children}</div>;
}

export default Button;
