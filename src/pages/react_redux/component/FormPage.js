import React, { useState, useRef } from "react";

export default function FormPage() {
  const datakosong = {
    judul: "",
    pengarang: "",
    cetakan: "",
    tahunTerbit: 0,
    kotaTerbit: "",
    harga: 0,
  };

  const [data, setData] = useState(datakosong);
  const regex = /^[A-Za-z ]*$/;
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [errMsg, setErrMsg] = useState("");
  const fotoSampul = useRef(null);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "pengarang") {
      if (regex.test(value)) {
        setErrMsg("");
      } else {
        setErrMsg("Nama Pengarang harus berupa Huruf");
      }
    } else {
      if (name === "cetakan") {
        if (validRegex.test(value)) {
          setErrMsg("");
        } else {
          setErrMsg("Format Email Salah ");
        }
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log("data", data);
  };

  const handleSubmit = (event) => {
    if (errMsg !== "") {
      alert("Terdapat Data yang tidak sesuai");
    } else {
      alert(`Data buku"${data.pengarang}" berhasil diterima`);
    }
    event.preventDefault();
  };

  const resetData = () => {
    setData(datakosong);
    setErrMsg("");
  };
  return (
    <>
      <h1 style={{ "text-align": "center" }}>
        Formulir Peserta Coding BootCamp
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Lengkap judul:
          <input
            type="text"
            name="judul"
            required
            onChange={handleInput}
            value={data.judul}
            // className = {}
          />
        </label>
        <br></br>
        <label>
          Nama Lengkap :
          <input
            type="text"
            name="pengarang"
            required
            onChange={handleInput}
            value={data.pengarang}
            // className = {}
          />
        </label>
        <br></br>
        <label>
          Email :
          <input
            type="email"
            name="cetakan"
            required
            onChange={handleInput}
            value={data.cetakan}
            // className = {}
          />
        </label>
        <br></br>
        <label>
          No Handphone
          <input
            type="number"
            name="tahunTerbit"
            required
            onChange={handleInput}
            value={data.tahunTerbit}
            // className = {}
          />
        </label>
        <br></br>
        <label>
          Kota Terbit:
          <input
            type="text"
            name="kotaTerbit"
            required
            onChange={handleInput}
            value={data.kotaTerbit}
            // className = {}
          />
        </label>
        <br></br>
        <label>
          harga:
          <input
            type="number"
            name="harga"
            required
            onChange={handleInput}
            value={data.harga}
            // className = {}
          />
        </label>
        <br></br>
        <label>
          Foto Sampul :
          <input
            type="file"
            refs={fotoSampul}
            // className = {}
          />
        </label>
        <span style={{ color: "red" }}>{errMsg}</span>

        <br></br>
        <input type="submit" value="Submit" />
        <button onClick={resetData}>Reset</button>
      </form>
    </>
  );
}
