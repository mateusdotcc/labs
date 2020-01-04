import React from "react";
import "./App.css";

import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter initialValue={9876} />
      <Counter />
    </div>
  );
};

export default App;
