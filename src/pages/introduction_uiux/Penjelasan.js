import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>UX (User Experience)</h3>
        <p>
          UX adalah Pengalaman pengguna menggunakan produk kita / Everything
          that users feel everytime they're using a product
        </p>

        <h3>Design UX Thinking</h3>
        <ul>
          <li> Emphatize : Personas Job Stories </li>
          <li> Define : Identify Needs</li>
          <li> Ideate : Task Flows</li>
          <li>Prototype : Hi-Fi Mockups Clickable Prototype</li>
          <li> Validate : Test Prototype Iterate</li>
        </ul>
        <h3>UI (User Interface)</h3>
        <p>
          UI adalah sebuah desain visual yang digunakan untuk berinteraksi
          dengan produk.
        </p>
        <h3>4 Pilar UI</h3>
        <ul>
          <li>Consistency</li>
          <li> Keep the interface simple</li>
          <li> Good Typography</li>
          <li> Offer informative Feedback</li>
        </ul>
        <h3>3 Pilar Prototype</h3>
        <ul>
          <li>Representation</li>
          <li> Precision</li>
          <li> Interactivity</li>
        </ul>
        <h3>Prototype</h3>
        <p>Prototype adalah simulasi atau versi sampel dari produk akhir</p>
      </div>
    </>
  );
}
export default Penjelasan;
