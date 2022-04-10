import { useState } from "react";
import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";
import { v4 as uuidv4 } from "uuid";
import "../../App.css";

const initialValue = [
  {
    id: uuidv4(),
    title: "Mengerjakan Exercise",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Mengerjakan Assignment",
    completed: false,
  },
];

function Home() {
  const [data, setData] = useState(initialValue);

  const hapusPengunjung = (id) => {
    setData((oldData) =>
      oldData.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    setData((oldData) => [...oldData, newData]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <PassengerInput tambahPengunjung={tambahPengunjung} />
      <div style={{ padding: "10px" }}>
        <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
      </div>
    </div>
  );
}

export default Home;
