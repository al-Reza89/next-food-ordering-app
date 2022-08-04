import styles from "../styles/PizzaList.module.css";

import React from "react";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quis
        dolorem tempore veniam error, asperiores accusantium itaque quas fugit
        fuga excepturi doloremque eaque blanditiis alias aliquam natus voluptate
        optio cumque.
      </p>

      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
