import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>React Form</h3>
        <p>
          Form merupakan salah satu hal krusial dalam pengembangan aplikasi
          website. Form dapat digunakan untuk menghandle inputan dari user. Form
          banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan
          feedback, mengisi data dan masih banyak lainnya. Dalam react akan ada
          banyak hal kita pelajari dari Form. Seperti bagaimana menghandle
          inputan? Bagaimana memvalidasi inputan dsb. Untuk saat ini kita akan
          belajar Basic Form.
        </p>
        <h3>Controlled Component</h3>
        <p>
          Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui
          cara seperti ini disebut sebagai ”controlled component“.
        </p>
        <h3>Uncontrolled Component</h3>
        <p>
          alternatif lain dari controlled component, dimana data form akan
          ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component,
          alih-alih menulis event handler untuk setiap pembaruan state, kita
          bisa menggunakan ref untuk mendapatkan nilai form dari DOM.
        </p>
        <h3>Basic Validation</h3>
        <ul>
          <li>
            Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi
            tidak dapat berjalan dengan benar, jika data yang diolah tidak
            sesuai dengan kebutuhan aplikasi
          </li>
          <li>
            Melindungi akun pengguna. Misalnya, membuat pengguna untuk
            memasukkan data password yang aman
          </li>
          <li>
            Melindungi sistem/aplikasi. Validasi form yang kuat dapat
            meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi
          </li>
        </ul>
        <h3>Tipe Validasi Data Formulir</h3>
        <ul>
          <li>
            Client-side Validation : Validasi yang dilakukan pada sisi klien
            (browser). Validasi ini dilakukan agar data input sesuai dengan
            kebutuhan form, sebelum data form dikirimkan ke server. Kelebihan
            validasi sisi klien ialah user-friendly, karena jika terjadi
            kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus
            menunggu respon dari server untuk mengetahui hasil validasi.
          </li>
          <li>
            Server-side Validation : Validasi yang dilakukan pada sisi server.
            Sisi server bertugas untuk memvalidasi data kembali, sebelum
            disimpan di database. Jika ditemukan kesalahan, maka response akan
            dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat
            oleh pengguna. Berbeda dengan validasi sisi klien, validasi ini
            tidak user-friendly. Karena, koreksi kesalahan akan dikirimkan,
            setelah form di-submit
          </li>
        </ul>
      </div>
      ;
    </>
  );
}
export default Penjelasan;
