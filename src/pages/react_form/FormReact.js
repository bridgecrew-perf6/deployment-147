import React, { useState, useRef } from "react";
import Sidebar from "../../component/Sidebar";

export default function FormReact() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: 0,
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const regex = /^[A-Za-z ]*$/;
  const mailFormat = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  const numberFormat = /^\d*$/;
  const suratKesungguhan = useRef("");
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState("");
  const [radioIt, setRadioIt] = useState(false);
  const [radioNonit, setRadioNonIt] = useState(false);

  const handleSubmit = (event) => {
    if (errorMassage !== "") {
      alert(" Terdapat Data yang belum lengkap");
    } else {
      alert(`Data"${data.nama}" berhasil diterima`);
    }
    event.preventDefault();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "nama") {
      if (regex.test(value)) {
        setErrorMassage("");
      } else {
        setErrorMassage("Nama Lengkap Harus Berupa Huruf ");
      }
    }
    if (name === "email") {
      if (mailFormat.test(value)) {
        setErrorMassage("");
      } else {
        setErrorMassage("Format Email Salah");
      }
    }
    if (name === "nomorHandphone") {
      if (numberFormat.test(value)) {
        setErrorMassage("");
      } else {
        setErrorMassage("Format Nomor Handphone Salah");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log("data", data);

    console.log("data", e.target.value);
    if (e.target.name === "pendidikan") {
      setRadioIt(!radioIt);
      setRadioNonIt(false);
    } else if (e.target.name === "pendidikan") {
      setRadioNonIt(!radioNonit);
      setRadioIt(false);
    }
  };

  const resetData = () => {
    setData(baseData);
    setErrorMassage("");
  };

  return (
    <div style={{ marginTop: 100 }}>
      <Sidebar />
      <h1>Pendaftaran peserta Coding Bootcamp</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nama Lengkap</p>
          <input type="text" name="nama" required onChange={handleChange} />
        </label>
        <p></p>
        <label>
          <p>Email</p>
          <input type="email" name="email" required onChange={handleChange} />
        </label>
        <p></p>
        <label>
          <p>No Handphone</p>
          <input
            minlength={9}
            maxlength={14}
            type="number"
            name="noHandphone"
            onChange={handleChange}
            required
          />
        </label>
        <p></p>
        <label>
          <p>Latar Belakang Pendidikan</p>
          <input
            type="radio"
            name="pendidikan"
            value="IT"
            checked={radioIt}
            onChange={handleChange}
          />
          IT
          <input
            type="radio"
            name="pendidikan"
            value="NONIT"
            checked={radioNonit}
            onChange={handleChange}
          />
          NON IT
        </label>
        <p></p>
        <label>
          <p>Kelas Koding yang dipilih</p>
          <select name="kelas" onChange={handleChange} required>
            <option value="">--Pilih Salah Satu--</option>
            <option value="fullstackWebDev">Fullstack Web Development</option>
            <option value="frontend">Frontend with ReactJS</option>
            <option value="backend">Backend with Golang</option>
          </select>
        </label>
        <p></p>
        <label>
          Foto Surat Kesungguhan
          <br></br>
          <input type="file" refs={suratKesungguhan} />
        </label>
        <p></p>
        <label>
          <p>Harapan Untuk Coding Bootcamp ini</p>
          <textarea name="harapan" onChange={handleChange} />
        </label>
        <p></p>
        <span style={{ color: "red" }}>{errorMassage}</span>
        <p></p>
        <input type="submit" value="Submit" />
        <button onClick={resetData}>Reset</button>
      </form>
    </div>
  );
}
