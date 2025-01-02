import { useState } from "react";
import { FriendList } from "./components/FriendList";
import { FormAddFriend } from "./components/FormAddFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  //
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  //
  function handleAddNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  //
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />

        {showAddFriend && <FormAddFriend onAddNewFriend={handleAddNewFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

const FormSplitBill = () => {
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
