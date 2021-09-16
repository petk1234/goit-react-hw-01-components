import React from "react";
import reactDom from "react-dom";
import transactions from './transactions.json';
import TransactionHistory from "./TransactionHistory";
const App4 = () =>(
    <table className="transaction-history">
           <thead>
              <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
              </tr>
           </thead>
              <TransactionHistory
                 items = {transactions}
              />
    </table>
);

reactDom.render(<App4/>, document.getElementById('root'));