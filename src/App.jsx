import { useState } from "react";
import Header from "./components/Header";

import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
