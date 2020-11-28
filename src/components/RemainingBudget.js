import React, { useContext } from "react";
import Context from "../context/context";

export default function RemainingBudget() {
  const context = useContext(Context);
  return (
    <div style={{ fontSize: "20px" }}>
      Your remaining budget is:{" "}
      {context.budget - context.cart.reduce((acc, cur) => acc + cur.price, 0)}
    </div>
  );
}
