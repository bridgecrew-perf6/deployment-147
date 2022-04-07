import { Button, FormControl, InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import { Component } from "react";

class PassengerInput extends Component {
  state = {
    title: "",
    editing: true,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = this.state.title;
    if (formIsNotEmpty) {
      const newData = {
        title: this.state.title,
      };
      this.props.tambahPengunjung(newData);
      this.setState({
        title: "",
        completed: "",
      });
    } else {
      alert("data masih kosong");
    }
  };

  handleBukaInput = () => {
    this.setState({
      editing: false,
    });
  };

  hanldeTutupInput = () => {
    this.setState({
      editing: true,
    });
  };

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <div onSubmit={() => {}} style={viewMode}>
            <p>Masukkan Nama Pekerjaan </p>
            <Col md={{ span: 4, offset: 4 }}>
              <InputGroup>
                <FormControl
                  type="text"
                  value={this.state.title}
                  name="title"
                  onChange={this.onChange}
                ></FormControl>
              </InputGroup>
            </Col>

            {/* <p>Pilih list anda</p>
          <select onChange={this.onChange} name="completed">
            <option value={true} selected>
              Selesai
            </option>
            <option value={false}>Belum Selesai</option>
          </select> */}

            <div style={{ padding: "10px" }} className="justify-content-evenly">
              <Button onClick={this.handleSubmit}>Submit</Button>
              <Button onClick={this.hanldeTutupInput}>Selesai</Button>
            </div>
          </div>
          <p></p>

          <Button onClick={this.handleBukaInput} style={editMode}>
            Masukkan Pekerjaan
          </Button>
        </div>
      </div>
    );
  }
}

export default PassengerInput;
