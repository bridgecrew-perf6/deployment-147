import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>Frontend Framework</h3>
        <p>
          sekumpulan aturan kode yang bisa kita gunakana untuk mempermudah dalam
          membuat suatu tampilan website
        </p>
        <h3>Bootstrap</h3>
        <p>
          framework HTML, CSS dan JavaScript yang berfungsi untuk mendesain
          website responsive dengan cepat dan mudah. Suatu peristiwa yang dipicu
          oleh pengguna pada suatu komponen, misalnya tombol ditekan
        </p>
        <h3>Kenapa Boostrap </h3>
        <ul>
          <li>Gratis</li>
          <li>Mudah Dipelajari</li>
          <li>Cepat</li>
          <li>Mendukung responsive</li>
        </ul>
        <h3>Class pada Bootstrap</h3>
        <ul>
          <li>Container : Container, container-fluid</li>
          <li>Row : row</li>
          <li>Column : col-md-12, col-lg-12, col-sm-6</li>
          <li>Button : btn-primary, btn-success, btn-denger</li>
        </ul>
      </div>
    </>
  );
}
export default Penjelasan;
