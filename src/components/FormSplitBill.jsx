import { Button } from "../App";

export const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split Bill With {selectedFriend.name}</h2>

      <label htmlFor="billValue">💰 Bill Value</label>
      <input type="number" />

      <label htmlFor="userExpense">🕴🏾 Your Expense</label>
      <input type="number" />

      <label htmlFor="friendExpense">👫 {selectedFriend.name}'s Expense</label>
      <input type="number" />

      <label>Who is playing the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Add</Button>
    </form>
  );
};
