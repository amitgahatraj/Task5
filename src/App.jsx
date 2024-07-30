import { useState } from "react";
import "./App.css";
import Header from "./header";
import Profile from "./profile";
import Button from "./button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header title="Task 5" />
      <Profile name="Amit" age={23} bio="Student" />
      <Button />
    </>
  );
}

export default App;
