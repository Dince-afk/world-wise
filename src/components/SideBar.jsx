import { Outlet } from "react-router-dom";

import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.copyright}>
        © Copyright 2024 by WorldWise Inc.
      </footer>
    </div>
  );
}

export default Sidebar;
