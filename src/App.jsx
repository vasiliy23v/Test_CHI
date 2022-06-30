import React, { useState, useEffect } from "react";

import CartBlock from "./components/cartBlock";
import Header from "./components/header";
import TotalAmount from "./components/totalAmount";

function App() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/current-loans.json")
      .then((resp) => resp.json())
      .then((json) => setLoans(json.loans));
  }, []);

  /*
The most correct way to implement summation, in my opinion, would be to use the Redux library, 
however, I have tried raising the state. 
The last point has not been implemented to the end, but in time I'm sure I will learn how to do it

  const takeState = (a) => {
    console.log(a);
  };
  const sum = 0;
  const sumFunc = () => {
    loans.forEach((obj) => (sum += Number(obj.available.replace(",", ""))));
  };
  
  */
  return (
    <div>
      <Header />
      <main className="main">
        {loans.map((obj) => (
          <CartBlock
            key={obj.id}
            title={obj.title}
            available={obj.available}
            term_remaining={obj.term_remaining}
            amount={obj.amount}
            /*takeState={takeState}*/
          />
        ))}

        <TotalAmount /*sumFunc={sumFunc}*/ />
      </main>
    </div>
  );
}

export default App;
