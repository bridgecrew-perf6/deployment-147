import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h2>Testing</h2>

        <p>
          Proses memverifikasi bahwa test assertions kita benar dan bahwa kode
          kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah
          ekspresi boolean yang mengembalikan nilai true ada bug dikode kita.
        </p>
        <h2>Manfaat Testing</h2>
        <ol>
          <li>
            <p>
              Ketika aplikasi kita mempunyai coverage yang baik, kita akan
              merasa percaya diri jika harus mengubah suatu bagian pada aplikasi
              kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain
              menjadi broken kita akan segera mengetahuinya.
            </p>
          </li>
          <li>
            <p>
              Mengurangi bug pada aplikasi, walaupun testing tidak menjamin
              aplikasi kita bebas dari bug, tetapi kita bisa mencegah beberapa
              hal yang berpotensi menjadi bug.
            </p>
          </li>
        </ol>
        <h2>Kategori Testing</h2>
        <ol>
          <li>
            Rendering Component tress : didalam environment tes yang sudah
            disederhanakan dan ditegaskan pada keluarannya.{" "}
          </li>
          <li>
            Menjalankan aplikasi lengkap : didalam environment peramban
            (browser) asli. ini dikenal sebagai test &quot;end-to-end&quot;.
          </li>
        </ol>
        <h2>Pertimbangan memilih perkakas</h2>
        <ol>
          <li>Kecepatan iterasi vs environment yang realistis.</li>
          <li>seberapa banyak mok</li>
        </ol>
        <h2>Rekomendasi Tools</h2>
        <ol>
          <li>JEST</li>
          <li>React Testing Library</li>
          <li>Install</li>
        </ol>
      </div>
    </>
  );
}
export default Penjelasan;
