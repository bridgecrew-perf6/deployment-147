import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h1>JSX</h1>
        <p>adalah singkatan dari Javascript XML, Ekstensi pada javascript.</p>
        <h2>Kenapa menggunakan JSX</h2>
        <p>
          JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat
          dengan logic UI. Separation of Technology -&gt; separation of Concerns
        </p>
        <h2>Spesifikasi jenis Element React</h2>
        <ol>
          <li>Kapitalisasi untuk komponen React</li>
          <li>Huruf kecil (lowercase) untuk komponen bawaan</li>
        </ol>
        <h3>Menaruh expression pada JSX</h3>
        <p>
          kita dapat menaruh ekspresi JS yang valid pada jsx dengan menggunakan
          kurung kurawal
        </p>
        <h2>JSX adalah expression</h2>
        <p>
          setelah dikompilasi, Ekspresi JSX akan menjadi panggilan fungsi
          JavaScript biasa dan menjadi objek JavaScript
        </p>
        <h3>Menentukan atribut dengan JSX</h3>
        <ol>
          <li>Tanda kutip untuk menentukan string literal</li>
          <li>kurung kurawal untuk menyematkan ekspresi JavaScript</li>
          <li>React DOM menggunakan camelCase sebagai konversi penamaan</li>
        </ol>
        <h3>Menspesifikasikan elemen anak dengan JSX</h3>
        <ol>
          <li>
            Jika tag bersifat kosong (tidak memiliki elemen anak). kita bisa
            saja menutupnya secara langsung dengan /&gt;
          </li>
          <li>Tag JSX dimungkinkan untuk memiliki elemen anak</li>
        </ol>
        <h1>Component</h1>
        <p>
          Komponen React adalah bagian kode yang dapat digunakan kembali yang
          digunakan untuk menentukan tampilan, behavior, dan state sebagian UI
        </p>
        <h1>Props</h1>
        <ol>
          <li>
            singkatan dari properties, membuat kita dapat memberikan argumen /
            data pada component
          </li>
          <li>props membantu untuk membuat komponen menjadi lebih dinamis</li>
          <li>
            Props dioper ke component sama seperti memberikan atribut pada tag
            HTML
          </li>
          <li>Props pada component adalah read-only dan tidak dapat diubah</li>
        </ol>
        <h2>komposisi Komponen</h2>
        <ol>
          <li>Kontainmen</li>
          <li>Spesialisasi</li>
        </ol>
        <h1>React Lifecycle</h1>
        <ol>
          <li>render()</li>
          <li>componentDidMount()</li>
          <li>componentDidUpdate()</li>
          <li>componentWillUnmount()</li>
        </ol>
        <h2>render()</h2>
        <ol>
          <li>Fungsi yang paling sering dipakai</li>
          <li>Required pada class component</li>
          <li>Pure function. Tidak boleh ada setState()</li>
        </ol>
        <h2>ComponentDidMount()</h2>
        <ol>
          <li>Dipanggil ketika component sudah di render untuk pertama kali</li>
          <li>Tempat yang tepat untuk pemanggilan API</li>
          <li>Boleh ada setState()</li>
        </ol>
        <h2>ComponentDidUpdate()</h2>
        <ol>
          <li>Dipanggil ketika terjadi update(props atau state berubah)</li>
        </ol>
        <h2>ComponentWillUnmount()</h2>
        <ol>
          <li>Dipanggil ketika component akan dihancurkan</li>
          <li>Cocok untuk clean up actions</li>
        </ol>
        <h3>Lifecycle method yang lainnya</h3>
        <ol>
          <li>shouldComponentUpdate()</li>
          <li>static getDerivedStateFromProps()</li>
          <li>getSnapshotBeforeUpdate()</li>
        </ol>
        <h1>Render bersyarat dan list</h1>
        <p>
          Pada React, kita dapat membuat kompenen berbeda yang mencakup perilaku
          yang dibutuhkan. Lalu, kita dapat me-render hanya beberapa bagian
          saja. berdasarkan state dari aplikasi Anda.
        </p>
        <ol>
          <li>menggunakan IF</li>
          <li>Inline IF dengan operator &amp;&amp;</li>
          <li>Inline IF-Else dengan ternary conditional operator</li>
          <li>Mencegah komponen untuk rendering</li>
        </ol>
        <h3>Render List</h3>
        <p>
          kita dapat membangun koleksi dari beberapa elemen dan menyertakannya
          dalam JSX menggunakan tanda kurung kurawal{}
        </p>
        <h3>Key</h3>
        <p>
          key membantu React untuk mengindentifikasi item mana yang telah
          diubah, ditambahkan, atau dihilangkan.
        </p>
        <h1>Struktur Direktori</h1>
        <p>
          React tidak memiliki pendapat tentang bagaimana cara memasukkan file
          ke folder, tapi ada beberapa note :
        </p>
        <ol>
          <li>Pengelompokan berdasarkan fitur atau rute</li>
          <li>Pengelompokan berdasarkan jenis file</li>
          <li>Hindari terlalu banyak nesting</li>
          <li>Jangan terlalu memikirkannya</li>
        </ol>
        <h1>Styling</h1>
        <ol>
          <li>Classes dan CSS</li>
          <li>Atribut Style</li>
          <li>Modul CSS</li>
        </ol>
      </div>
    </>
  );
}
export default Penjelasan;
