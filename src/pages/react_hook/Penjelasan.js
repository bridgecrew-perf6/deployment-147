import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>Introduction to React Hooks</h3>
        <p>
          Hooks merupakan fitur baru di React 16.8 Dengan Hooks, kita dapat
          menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah
          kelas.
        </p>
        <h3>Motivasi</h3>
        <ul>
          <li>
            Kesulitan untuk menggunakan kembali stateful logic antar komponen
          </li>
          <li>Komponen kompleks menjadi sulit untuk dimengerti</li>
          <li>Kelas memebingunkan manusia dan mesin</li>
        </ul>
        <h3>Hooks Pada React </h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Hooks Dasar</th>
              <th scope="col">Hooks Tambahan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>useState</td>
              <td>useCallback</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>useEffect</td>
              <td>useCallback</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>useContext</td>
              <td>useMemo</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td></td>
              <td>useRef</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td></td>
              <td>useImperative Handle</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td></td>
              <td>useLayout Effect</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td></td>
              <td>useDebug Value</td>
            </tr>
          </tbody>
        </table>
        <h3>Aturan pada Hooks</h3>
        <ul>
          <li>
            Hanya dipanggil Hooks di Tingkat Atas : jangan memanggil Hooks dari
            dalam loops, conditions, atau nested functions
          </li>
          <li>
            Hanya Panggil Hooks dari fungsi-fungsi React : jangan memanggil
            Hooks dari fungsi-fungsi JavaScript biasa. kita dapat : Memanggil
            Hooks dari komponen-komponen fungsi React. Memanggil Hooks dari
            custom Hooks.Melindungi akun pengguna. Misalnya, membuat pengguna
            untuk memasukkan data password yang aman
          </li>
        </ul>
        <h3>Custom Hooks</h3>
        <p>
          membuat Hooks kita sendiri memungkinkan kita mengekstrak komponen
          logika ke fungsi yang dapat digunakan lagi.
        </p>
      </div>
      ;
    </>
  );
}
export default Penjelasan;
