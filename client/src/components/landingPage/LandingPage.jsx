import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/TomatealAgua.mp4";
import styles from "../landingPage/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div>
      <video className={styles.video} autoPlay loop muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <div className={styles.titleCompuesto}>
        <h1 className={styles.title}>"24 horas"</h1>
        <p className={styles.text}>"La fonda del pinchazo"</p>
      </div>
      <Link to="/home">
        <button className={styles.btnlanding}>Start</button>
      </Link>
    </div>
  );
}
