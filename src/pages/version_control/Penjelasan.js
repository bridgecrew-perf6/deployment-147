import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>Redux Thunk</h3>
        <p>
          Thunk Middleware untuk redux yang memungkinkan kita untuk membuat
          action creator yang mengembalikan function bukan action Hooks
          merupakan fitur baru di React 16.8 Dengan Hooks, kita dapat
          menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah
          kelas.
        </p>
        <h3>Waktu yang tepat untuk menggunakan REDUX</h3>
        <ul>
          <li>Banyak state yang perlu ditaruh dibanyak tempat</li>
          <li>State pada app sering berubah</li>
          <li>Logic untuk mengubah state kompleks</li>
          <li>Ukuran codebase yang sedang-besar, dan banyak orang</li>
          <li>Perlu untuk mengetahui bagaimana state dengan waktu</li>
        </ul>
        <h3>Redux Libraries dan Tools</h3>
        <ul>
          <li>React-Redux</li>
          <li>React Toolkit</li>
          <li>Redux DevTools Extension</li>
        </ul>
        <h3>Komponen Penting di Redux</h3>
        <ul>
          <li>
            Actions : digunakan untuk memberikan informasi dari aplikasi ke
            store.
          </li>
          <li>
            Reducer : Pure JavaScript functions yang mengambil state aplikasi
            saat ini dan object action lalu mengembalikan state aplikasi terbaru
          </li>
          <li>Store : Obejk sentral yang menyimpan state pada aplikasi</li>
        </ul>
        <h3>Notes Kesimpulan</h3>
        <ul>
          <li>Redux adalah library untuk menajemen state global</li>
          <li>Redux menggunakan struktur "one-way data flow"</li>
          <li>Redux menggunakan beberapa tipe code</li>
        </ul>
        <h3>Kenapa Perlu Redux Thunk</h3>
        <p>
          Untuk menghandle side effect logic seperti logic synchronous kompleks
          yang perlu mengakses store dan juga logic async seperti request data.
          membuat Hooks kita sendiri memungkinkan kita mengekstrak komponen
          logika ke fungsi yang dapat digunakan lagi.
        </p>
      </div>
      ;
    </>
  );
}
export default Penjelasan;
