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

  return (
    <div>
      <Header />
      <main className="main">
        {loans.map((obj) => (
          <CartBlock
            key={obj.id}
            title={obj.title}
            available={obj.available}
            annualised_return={obj.annualised_return}
            term_remaining={obj.term_remaining}
            ltv={obj.ltv}
            amount={obj.amount}
          />
        ))}

        <TotalAmount />
      </main>
    </div>
  );
}

export default App;
