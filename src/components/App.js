import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";

function Clickable({ clickEvent }) {
  return <button onClick={clickEvent}>click me</button>;
}

function App() {
  function eventHandle() {
    console.log("you clicked me");
  }
  return (
    <div>
      <h3>onClick</h3>
      <Tickler />
      <hr />
      <Clickable clickEvent={eventHandle} />
      <MultiButton />
      <hr />

      <h3>onChange</h3>
      <ChangeItUp />
      <hr />

      <h3>onSubmit</h3>
      <Login />
      <hr />
    </div>
  );
}

export default App;
