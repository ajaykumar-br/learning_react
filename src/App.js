import React, { useState } from "react";
import Tweet from "./Tweet"
import "./App.css"

function App(){
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {name : "Ajay", message : "Hey! Doing great so far..."},
    {name : "Sheldon Cooper", message : "I am right and I know it..." }
  ]);

  const increment = () => {
    setCount(count+1);
    setRed(! isRed);
  };

  return (
    <div className="app">
      {/*<Tweet name="Ajay" message="Hey! Doing great so far..." />
      <Tweet name="Sheldon Cooper" message="I am right and I know it..." />
      <Tweet name="Net Ninja" message="Yupp! Thats me(The neat guy)..." />
      <Tweet name="Jon Snow" message="Winter is coming..." />
      <button onClick={increment}>Increase</button>
      <h1>{count}</h1>
      <h1 className={ isRed ? "red" : "" }>Change my color!</h1>*/}

      {users.map(user => (
        <Tweet name = {user.name} message = {user.message} />
      ))}

    </div>
  );
}
export default App;
