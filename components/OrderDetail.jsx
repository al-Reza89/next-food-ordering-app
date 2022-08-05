import React, { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = () => {
  const [costomer, setCostomer] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}> Name Surname </label>
          <input
            type="text"
            placeholder="Jhon Doe"
            className={styles.input}
            onChange={(e) => setCostomer(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
