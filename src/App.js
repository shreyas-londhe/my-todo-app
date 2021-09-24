import React, { useState } from "react";
import "./App.css";

import Heading from "./components/Heading";
import Input from "./components/Input";

const App = () => {
  const [todo, setTodo] = useState({});

  return (
    <div>
      <Heading />
      <Input todo={todo} />
    </div>
  );
};

export default App;
