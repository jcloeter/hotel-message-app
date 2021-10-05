import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Hotel Greeting Generator</h1>
      <h4>Greet Customers the Way You'd Like to be Greeted</h4>
    </div>
  );
};

export default Header;
