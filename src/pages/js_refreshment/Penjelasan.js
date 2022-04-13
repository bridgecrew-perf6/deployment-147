import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>CSS</h3>
        <p>Cascading Style Sheets.</p>

        <h3>3 Cara menggunakan file CSS</h3>
        <ul>
          <li>External : syntax ini disiapkan ke dalam tag HEAD pada html. </li>
          <li>Internal : syntax ini digunakan didalam suatu file html</li>
          <li>Inline : syntax ini digunakan untuk element tunggal pada html</li>
        </ul>
        <h3>CSS Font Properties</h3>
        <ul>
          <li>Font : Menetapkan semua properti font dalam satu deklarasi.</li>
          <li>Font-family : Menentukan kelompok font teks.</li>
          <li>Font-size : Menentukan ukuran font teks. </li>
          <li>Font-weight : Menentukan ketebalan untuk font teks. </li>
          <li>Font-style : Menentukan font teks menjadi miring.</li>
        </ul>
        <h3>CSS Background Properties</h3>
        <ul>
          <li>
            Background-color : menetapkan warna background pada suatu elemen
          </li>
          <li>
            Background-image : menentukan gambar background pada suatu elemen
          </li>
          <li>
            Background-repeat : Menentukan gambar background untuk di ulang
          </li>
          <li>Background-size : menentukan ukuran gambar untuk background</li>
          <li>Background-position : mengatur posisi awal gambar background</li>
        </ul>
        <h3>CSS LINK</h3>
        <ul>
          <li>hover : kondisi style ketika mouse berada diatas elemen</li>
          <li>active : Style ketika link "a" ditekan</li>
          <li>
            visited : Style dimana elemen link "a" telah dikunjungi/diklik
          </li>
        </ul>
        <h3>CSS Display</h3>
        <ul>
          <li>
            Block : elemen **block** selalu dimulai pada baris baru. (dimulai
            dari kiri ke kanan)
          </li>
          <li>
            Inline-block : Elemen **inline-block** membutuhkan lebar sesuai yang
            diperlukan.
          </li>
          <li>None : Menyebunyikan elemen untuk tidak ditampilkan.</li>
        </ul>
        <h3>CSS Table</h3>
        <ul>
          <li>Border : Menambahkan border pada table, th dan td</li>
          <li>Border-collapse : Membuat border menjadi single border</li>
          <li>nth-child(even) : Membuat background stripe</li>
        </ul>
      </div>
    </>
  );
}
export default Penjelasan;
