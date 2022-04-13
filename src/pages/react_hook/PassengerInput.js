import { Button, FormControl, InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import { useState } from "react";

function PassengerInput(props) {
  const [data, setData] = useState({
    title: "",
    completed: false,
  });
  const [editing, setEditing] = useState(true);

  const onChange = (e) => {
    setData({
      ...data,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty =  data.title;
    if (formIsNotEmpty) {
      const newData = {
        title: data.title,
      };
      props.tambahPengunjung(newData);
      setData({
        title: "",
        completed: "",
      });
    } else {
      alert("data masih kosong");
    }
  };

  const handleBukaInput = () => {
    setEditing(false);
  };

  const hanldeTutupInput = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={() => {}} style={viewMode}>
        <p>Masukkan Nama Pekerjaan </p>
        <Col md={{ span: 4, offset: 4 }}>
          <InputGroup>
            <FormControl
              type="text"
              value={data.title}
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
