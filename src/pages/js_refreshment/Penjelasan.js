import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>JavaScript</h3>
        <p>
          Bahasa Pemrograman yang High-Level, Scripting, Untyped dan
          Interpreted.
        </p>
        <h3>Values</h3>
        <p>Declaration adalah proses pembuatan variable untuk menyimpan data</p>
        <h3>Scooping</h3>
        <p>
          menentukan dimana variable, fungsi, dan objek diatur dan dapat diakses
          dalam kode kita. ini berarti ruang lingkup variable dikendalukan oleh
          lokasi deklarasi variable.
        </p>
        <h3>Hoisting</h3>
        <p>
          membuat beberapa jenis variable atau fungsi dapat diakses / digunakan
          dalam kode sebelum dideklarasikan
        </p>
        <h3>Declaration</h3>
        <p>Proses pembuatan variable untuk menyimpan data</p>

        <h3>Kesimpulan</h3>
        <ul>
          <li>
            VAR : Declaration, Redeclaration, Reaasignment, Hoisting, Global
            Scope, Block Scope
          </li>
          <li>LET : Declaration, Reaasignment, Global Scope</li>
          <li>Const : Global Scope</li>
        </ul>
        <h3>Primitive</h3>
        <ul>
          <li> String</li>
          <li> Boolean</li>
          <li> Number</li>
          <li> Bigint</li>
          <li> Undefined </li>
          <li> Null</li>
          <li> Symbol (ES6)</li>
        </ul>
        <h3>Object</h3>
        <ul>
          <li> Object</li>
          <li> Array</li>
          <li> Function</li>
          <li> Date</li>
          <li> Set</li>
          <li> Map</li>
          <li> Weak Set</li>
          <li> Weak Map</li>
        </ul>
        <h3>Destructuring</h3>
        <p>
          Ekspresi dari Javascript yang memungkinkan untuk menyalin nilai dari
          array, atau properti dari objek , ke dalam variable yang berbeda
        </p>
        <h3>Spread Syntax</h3>
        <p>
          dapat digunakan ketika semua elemen dari object atau array perlu
          dimasukkan ke dalam semacam daftar
        </p>
        <h3>Control Flow</h3>
        <ul>
          <li> Pengulangan : For, While, DO While </li>
          <li>
            Pengkondisian : If.. Else, Swicth, Block, Try..Catch, Break,
            Continue, Throw
          </li>
        </ul>
        <h3>Normal Flow </h3>
        <p>
          Normal Flow : Pengeksekusian statement dari atas ke bawah atau kiri ke
          kanan yang dilakukan secara berurutan
        </p>
        <h3>Function</h3>
        <p>
          sebuah objek, karena memiliki properti dan juga method. Function
          digunakan untuk melakukan serangkaian komputasi / prosedur yang dapat
          digunakan berulang kali
        </p>
        <h3>Synchronous</h3>
        <p>
          Mengeskeskusi setiap perintah satu persatu sesuai urutan kode yang
          dituliskan
        </p>
        <h3>Asynchrous</h3>
        <p>
          hasil eksekusi atau output tidak selalu berdasarkan urutan kode,
          tetapi berdasarkan waktu proses
        </p>
        <h3>Callback</h3>
        <p>
          fungsi yang dikirimkan sebagai parameter pada fungsi lain atau
          callback adalah fungsi yang dieksekusi setelah fungsi lain selesai
          dijalankan
        </p>
        <h3>Promise</h3>
        <p>
          Objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah
          event yang asynchronous dimasa mendatang
        </p>
        <h3>Asynchrous function</h3>
        <p>
          sebuah function yang bekerja secara asynchronous yang menghasilkan
          promise sebagai return value-nya, tetapi cara penulisan code-nya
          menggunakan penulisan yang synchronous
        </p>
        <h3>Await</h3>
        <p>
          Sebuah keyword yang terdapat pada sync function yang tujuannya
          menghentikan eksekusi sambil menunggu promise-nya selesai
        </p>
        <h3>Class</h3>
        <p>Prorotype dari suatu object yang akan kita buat</p>
        <h3>Construtor</h3>
        <p>
          method didalam class yang akan selalu terpanggil pertama kali ketika
          membuat object
        </p>
        <h3>Attributes</h3>
        <p>
          kumpulan variable yang membentukan object yang dimiliki oleh suatu
          class
        </p>
        <h3>Extends</h3>
        <p>
          digunakan untuk membuat kelas anak dari kelas induk. kelas anak
          mewarisi semua atribut dan metode dari kelas induk.
        </p>
        <h3>DOM (Document Object Model)</h3>
        <p>
          API untuk HTML yang merepresentasikan halaman web pada suatu dokumen
          menjadi sebuah object
        </p>
      </div>
    </>
  );
}
export default Penjelasan;
