import styles from "./Homepage.module.css";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    fetch("http://localhost:3000/api/hello").catch((res) => console.log(res));
  }, []);

  return (
    <main className={`${styles.homepage} bg-slate-300`}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <NavLink to="login">
          <Button type={"primary"}>Start exploring</Button>
        </NavLink>
      </section>
    </main>
  );
}
