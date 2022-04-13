import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>Handling Event</h3>
        <p>
          Suatu Metode untuk menangani sebuah Event / aksi yang diberikan
          pengguna kepada suatu komponen
        </p>
        <h3>Event</h3>
        <p>
          Suatu peristiwa yang dipicu oleh pengguna pada suatu komponen,
          misalnya tombol ditekan
        </p>
        <h3>State</h3>
        <ul>
          <li>Data yang dimodifikasi menggunakan setState</li>
          <li>Setiap terjadi modifikasi akan terjadi render ulang</li>
          <li>Bersifat Asynchronous</li>
          <li>Dipakai dalam class</li>
        </ul>
        <h3>List Event</h3>
        <ul>
          <li>Clipboard Event = Promise</li>
          <li>Form Event = onChange, onSubmit</li>
          <li>Mouse Events = onClick, onDoubleClick, onMouseOver</li>
          <li>Generic Events = onError, onLoad</li>
        </ul>
        <h3>PROPS VS STATE</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Props</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Read-Only</td>
              <td>Can be Asynchronous</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Can not be modified</td>
              <td>Can be modified using this.setState</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Stateful & Stateless Component</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Stateless Component</th>
              <th scope="col">State Component</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Tidak tahu tentang aplikasi</td>
              <td>Mengerti tentang aplikasi</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Tidak melakukan data fetching</td>
              <td>Melakukan data fetching</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Tujuan utamanya adalah visualisasi</td>
              <td>Berinteraksi dengan aplikasi</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Dapat digunakan kembali</td>
              <td>Tidak dapat digunakan kembali</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Hanya berkomunikasi dengan induk langsungnya</td>
              <td>Meneruskan status dan data ke anak-anaknya</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Penjelasan;
