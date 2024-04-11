import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <footer className={styles.copyright}>
        © Copyright 2024 by WorldWise Inc.
      </footer>
    </div>
  );
}

export default SideBar;
