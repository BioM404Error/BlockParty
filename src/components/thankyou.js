import React from "react";
function clickMe() {
  alert("Link to permit!");
}
function clickMe1() {
  alert("Goes back to Receipt");
}
function Thankyou() {
  return (
    <div className="permit">
      <h1 class="main-title">Thank You!</h1>
      <p1 class="subtitle"> Our team is getting staright to work...</p1>
      <h1 class="title"> See You On The Block!</h1>
      <button onClick={clickMe}>Return To Home</button>
    </div>
  );
}
export default Thankyou;
