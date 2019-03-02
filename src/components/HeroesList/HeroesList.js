import React from "react";

import styles from "./heroes_list.module.css";
import Search from "../Search";

export default function HeroesList () {
    return (
      <div className={styles.heroes_list}>
        <h1>Enter hero name</h1>
        <Search />   
      </div>
    );
  
}
