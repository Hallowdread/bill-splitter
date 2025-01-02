import { Button } from "../App";

export const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split Bill With X</h2>

      <label htmlFor="billValue">💰 Bill Value</label>
      <input type="number" />

      <label htmlFor="userExpense">🕴🏾 Your Expense</label>
      <input type="number" />

      <label htmlFor="friendExpense">👫 X's Expense</label>
      <input type="number" />

      <label>Who is playing the bill</label>
      <select>
        <option value="">You</option>
        <option value="">X</option>
      </select>

      <Button>Add</Button>
    </form>
  );
};
