import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>Clean Code</h3>
        <p>
          Istilah untuk kode yang mudah dibaca, difahami dan diubah oleh
          programmer.
        </p>

        <h3>Kenapa Clean Code ?</h3>
        <ul>
          <li>Work Collaboration</li>
          <li>Feature Development</li>
          <li>Faster Development</li>
        </ul>
        <h3>Karakteristik Clean Code</h3>
        <ul>
          <li>Penamaan mudah dipahami</li>
          <li>Mudah dieja dan dicari</li>
          <li>Singkat namun mendeskripsikan konteks</li>
          <li>konsisten</li>
          <li>Hindari penambahan konteks yang tidak perlu</li>
          <li>Komentar</li>
          <li>Good function</li>
          <li>Gunakan Konvensi</li>
          <li>Formating</li>
        </ul>
        <h3>Saran Formating</h3>
        <ul>
          <li>lebar baris code 80-120 karakter</li>
          <li>satu class 300 - 500 baris</li>
          <li>baris code yang berhubungan saling berdekatan</li>
          <li>dekatkan fungsi dengan pemanggilnya</li>
          <li>Deklarasi variable berdekatan dengan penggunanya</li>
          <li>Perhatikan indentasi</li>
          <li>Menggunakan prettier atau formatter</li>
        </ul>
        <h3>Clean Code Principle</h3>
        <ul>
          <li>KISS : Keep it So Simple</li>
          <li>DRY : Dont Repeat Yourself</li>
          <li>Refactoring</li>
        </ul>
      </div>
    </>
  );
}
export default Penjelasan;
