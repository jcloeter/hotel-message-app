import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Hotel React</h1>
      <h4>Custom Greetings for Custom Customers</h4>
    </div>
  );
};

export default Header;
