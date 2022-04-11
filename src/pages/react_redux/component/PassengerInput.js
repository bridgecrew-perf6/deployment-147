import { useDispatch } from "react-redux";
import { tambahPengunjung } from "../store/passengerSlice";
import { useState } from "react";

import { Button, FormControl, InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function PassengerInput(props) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    id: "",
    title: "",
    completed: false,

    editing: true,
  });

  const onChange = (e) => {
    console.log("masuk ke onchange");
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.title.trim()) {
      if ("") {
        alert("Umur tidak sesuai");
      } else {
        const newData = {
          title: state.title,
          completed: state.completed,
        };

        dispatch(tambahPengunjung(newData));
        setState({
          ...state,
          title: "",
        });
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    });
  };

  const hanldeTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Pekerjaan </p>
        <Col md={{ span: 4, offset: 4 }}>
          <InputGroup>
            <FormControl
              type="text"
              value={state.title}
              name="title"
              onChange={onChange}
            ></FormControl>
          </InputGroup>
        </Col>
        <div style={{ padding: "10px" }} className="justify-content-evenly">
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={hanldeTutupInput}>Selesai</Button>
        </div>
      </div>

      <Button onClick={handleBukaInput} style={editMode}>
        Masukkan Pekerjaan
      </Button>
    </div>
  );
}

export default PassengerInput;
