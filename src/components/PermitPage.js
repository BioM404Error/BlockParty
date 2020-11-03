import React from "react";
function clickMe() {
  alert("Link to permit!");
}
function clickMe1() {
  alert("Goes to specifications page");
}
function permit() {
  return (
    <div className="permit">
      <div class="container">
        <div class="row align-items-center my-5">
          <h1 class="main-title">APPLY FOR PERMIT</h1>
          <div>
            <button onClick={clickMe}>
              Click Here To Access Permit for X City
            </button>
          </div>
          <p>
            This location requires you to submit your permit X days before the
            event
          </p>
          <button onClick={clickMe1}>Back</button>
          <button onClick={clickMe}>Next</button>
        </div>
      </div>
    </div>
  );
}
export default permit;
