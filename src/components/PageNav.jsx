import Button from "./Button";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div className={styles.nav}>
      <Logo />
      <ul>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/login">
          <Button type="primary">Login</Button>
        </NavLink>
      </ul>
    </div>
  );
}

export default PageNav;
