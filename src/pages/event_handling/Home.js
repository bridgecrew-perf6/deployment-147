import { Component } from "react";
import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";
import { v4 as uuidv4 } from "uuid";

class Home extends Component {
  constructor(props, tasks) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }

  // completeTask = index => {
  //   const newTasks = [...tasks];
  //   newTasks[index].completed = true;
  //   setTasks{newTasks};
  // };

  hapusPengunjung = (id) => {
    const newListPengunjung = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newListPengunjung });
  };

  tambahPengunjung = (newUser) => {
    const newPengunjung = { id: uuidv4(), ...newUser };
    this.setState({ data: [...this.state.data, newPengunjung] });
  };

  render() {
    return (
      <>
        <div style={{ marginTop: 100, textAlign: "center" }}>
          <h1>Todo List</h1>
          <h5>(Event Handler)</h5>
          <PassengerInput tambahPengunjung={this.tambahPengunjung} />
          <div style={{ padding: "10px" }}>
            <ListPassenger
              data={this.state.data}
              hapusPengunjung={this.hapusPengunjung}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
