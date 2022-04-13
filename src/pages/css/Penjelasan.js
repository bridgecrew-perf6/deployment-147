import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h2 id="css">CSS</h2>
        <p>
          Cascading Style Sheet merupakan aturan untuk mengatur beberapa
          komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam.
          CSS bukan merupakan bahasa pemograman
        </p>
        <p>CSS = Cascading Style Sheets Kegunaan : </p>
        <ol>
          <li>
            Dapat menghias halaman web. (color, size, font, background, width,
            height, dll).
          </li>
          <li>
            Dapat mengatur <strong>posisi</strong> pada halaman web. (float,
            align, display, position, dll).
          </li>
        </ol>
        <h2 id="3-cara-nambah-file-css">3 cara nambah file CSS</h2>
        <ol>
          <li>External CSS</li>
          <li>Internal CSS</li>
          <li>Inline CSS</li>
        </ol>
        <h2 id="external-css">External CSS</h2>
        <p>
          Syntax ini disiapkan ke dalam tag pada HTML. Ekstensi file CSS ada
          .css
        </p>
        <h2 id="internal-css">Internal CSS</h2>
        <p>Syntax ini dapat digunakan di dalam suatu file HTML. </p>
        <h2 id="inline-css">Inline CSS</h2>
        <ol>
          <li>Syntax ini dapat digunakan untuk elemen tunggal pada HTML</li>
          <li>Diprioritaskan untuk menerapkan style yang unik</li>
        </ol>
        <h2 id="css-fonts-properties">CSS Fonts Properties</h2>
        <ol>
          <li>Font : Menetapkan semua properti font dalam satu deklarasi.</li>
          <li>Font-family : Menentukan kelompok font teks.</li>
          <li>Font-size : Menentukan ukuran font teks.</li>
          <li>Font-weight : Menentukan ketebalan untuk font teks.</li>
          <li>Font-style : Menentukan font teks menjadi miring.</li>
        </ol>
        <h2 id="css-background-properties">CSS Background Properties</h2>
        <li>
          Background-color : menetapkan warna background pada suatu elemen
        </li>
        <li>
          Background-image : menentukan gambar background pada suatu elemen
        </li>
        <li>Background-repeat : Menentukan gambar background untuk di ulang</li>
        <li>Background-size : menentukan ukuran gambar untuk background</li>
        <li>Background-position : mengatur posisi awal gambar background</li>

        <h2 id="css-link">CSS Link</h2>
        <li>hover : kondisi style ketika mouse berada diatas elemen</li>
        <li>active : Style ketika link &quot;a&quot; ditekan</li>
        <li>
          visited : Style dimana elemen link &quot;a&quot; telah
          dikunjungi/diklik
        </li>

        <h2 id="css-transisi">CSS Transisi</h2>
        <p>
          Transisi CSS dapat mengubah value properti menjadi lebih halus dalam
          durasi yang ditentukan.
        </p>
        <h2 id="css-display">CSS Display</h2>
        <li>
          Block : elemen <strong>block</strong> selalu dimulai pada baris baru.
          (dimulai dari kiri ke kanan)
        </li>
        <li>
          Inline-block : Elemen <strong>inline-block</strong> membutuhkan lebar
          sesuai yang diperlukan.
        </li>
        <li>None : Menyebunyikan elemen untuk tidak ditampilkan.</li>

        <h2 id="css-table">CSS Table</h2>
        <li>Border : Menambahkan border pada table, th dan td</li>
        <li>Border-collapse : Membuat border menjadi single border</li>
        <li>nth-child(even) : Membuat background stripe</li>

        <h2 id="sumber">Sumber</h2>
        <ol>
          <li>
            Fonts :{" "}
            <a href="https://www.google.com/url?q=https://fonts.google.com/&amp;sa=D&amp;source=editors&amp;ust=1646063656783739&amp;usg=AOvVaw3hJZm-CsOFO21scPUBm9uo">
              https://www.google.com/url?q=https://fonts.google.com/&amp;sa=D&amp;source=editors&amp;ust=1646063656783739&amp;usg=AOvVaw3hJZm-CsOFO21scPUBm9uo
            </a>
          </li>
          <li>
            W3school css :{" "}
            <a href="https://www.google.com/url?q=https://www.w3schools.com/css/&amp;sa=D&amp;source=editors&amp;ust=1646063656784194&amp;usg=AOvVaw1LSUpeq4qT2eT4qPNVs61i">
              https://www.google.com/url?q=https://www.w3schools.com/css/&amp;sa=D&amp;source=editors&amp;ust=1646063656784194&amp;usg=AOvVaw1LSUpeq4qT2eT4qPNVs61i
            </a>
          </li>
          <li>
            Box Shadow css :{" "}
            <a href="https://www.google.com/url?q=https://www.cssmatic.com/box-shadow&amp;sa=D&amp;source=editors&amp;ust=1646063656786571&amp;usg=AOvVaw0ti25OkivZTcwYx14i0B0r">
              https://www.google.com/url?q=https://www.cssmatic.com/box-shadow&amp;sa=D&amp;source=editors&amp;ust=1646063656786571&amp;usg=AOvVaw0ti25OkivZTcwYx14i0B0r
            </a>{" "}
          </li>
          <li>
            Gradient css :{" "}
            <a href="https://www.google.com/url?q=https://www.cssmatic.com/gradient-generator&amp;sa=D&amp;source=editors&amp;ust=1646063656786995&amp;usg=AOvVaw19IgcUrdhwxdP3H6KwO4xL">
              https://www.google.com/url?q=https://www.cssmatic.com/gradient-generator&amp;sa=D&amp;source=editors&amp;ust=1646063656786995&amp;usg=AOvVaw19IgcUrdhwxdP3H6KwO4xL
            </a>
          </li>
          <li>
            Color picker :{" "}
            <a href="https://www.google.com/url?q=https://www.w3schools.com/colors/colors_picker.asp&amp;sa=D&amp;source=editors&amp;ust=1646063656787389&amp;usg=AOvVaw39ygw1pGgESrhRTRTIsfOw">
              https://www.google.com/url?q=https://www.w3schools.com/colors/colors_picker.asp&amp;sa=D&amp;source=editors&amp;ust=1646063656787389&amp;usg=AOvVaw39ygw1pGgESrhRTRTIsfOw
            </a>
          </li>
        </ol>
        <h2 id="replit">Replit</h2>
        <p>
          <a href="https://replit.com/join/nakkvfawau-joese-riorio">
            https://replit.com/join/nakkvfawau-joese-riorio
          </a>
        </p>
      </div>
    </>
  );
}
export default Penjelasan;
