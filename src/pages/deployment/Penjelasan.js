import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h2>Buil React App</h2>
        <p>
          Tujuan melakukan build pada aplikasi kita adalah agar aplikasi menjadi
          versi production, sehingga performanya lebih ringan dan cepat.
        </p>
        <h2>Deployment</h2>
        <p>
          adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah
          kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak
          orang, tidak hanya oleh kita sendiri.
        </p>
        <h2>Deployment dengan SURGE</h2>
        <p>
          SURGE adalah layanan penerbit website static gratis untuk front-end
          Developers. Website statik yang menggunakan surge akan memiliki
          subdomain .surge.sh Surge dapat menerima file HTML , CSS dan JS.
        </p>
        <h2>INSTALL SURGE</h2>
        <ol>
          <li>
            <code>npm install --global surge</code>
          </li>
          <li>jalankan perintah &#39;surge&#39; di terminal</li>
        </ol>
        <h2>Deployment dengan NETFLY CLI</h2>
        <p>
          Netlify adalah salah satu platform penyedia layanan build tools
          sekaligus Continous Deployment. Netlify memungkinkan kita untuk
          mempublish website statis secara gratis. Netlify juga sudah
          terintegrasi dengan Git Host populer seperti Github, Gitlab dan
          Bitbucket.
        </p>
        <h2>Deploy dengan Netlify</h2>
        <ol>
          <li>
            <code>npm install netlify-cli-g</code>
          </li>
          <li>jalankan perintah netlify deploy di terminal</li>
          <li>Verifiy akun melalui browser, pilih Authorize</li>
          <li>Pilih &quot;Create &amp; configure a new site &quot;.</li>
          <li>pilih lokasi file yang akan di deploy. Pilih ./build</li>
        </ol>
      </div>
    </>
  );
}
export default Penjelasan;
