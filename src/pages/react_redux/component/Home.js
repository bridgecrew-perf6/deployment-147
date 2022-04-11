import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";

function Home() {
  return (
    <div>
      <h1>Todo List</h1>
      <PassengerInput />
      <div style={{ padding: "10px" }}>
        <ListPassenger />
      </div>
    </div>
  );
}

export default Home;
