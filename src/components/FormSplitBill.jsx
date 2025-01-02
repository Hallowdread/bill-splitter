import { useState } from "react";
import { Button } from "../App";

export const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill ? bill - userExpense : "";
  const [whoIsPlaying, setWhoIsPlaying] = useState("user");
  //
  function handleSubmit(e) {
    e.preventDefault();
    //
    if (!bill || !userExpense) return;
    //
    onSplitBill(whoIsPlaying === "user" ? friendExpense : -userExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill With {selectedFriend.name}</h2>

      <label htmlFor="billValue">💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="userExpense">🕴🏾 Your Expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />

      <label htmlFor="friendExpense">👫 {selectedFriend.name}'s Expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>Who is playing the bill</label>
      <select
        value={whoIsPlaying}
        onChange={(e) => setWhoIsPlaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Add</Button>
    </form>
  );
};
