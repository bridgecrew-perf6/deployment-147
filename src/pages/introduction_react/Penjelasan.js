import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>React</h3>

        <p>
          adalah sebuah library , bukan framework. Library javascript untuk
          membuat user interface (UI) yang interaktif dan cepat pada web maupun
          mobile
        </p>

        <h3>Kenapa React</h3>
        <ul>
          <li>Deklaratif : berdasarkan Bagaimana dan apa</li>
          <li>Component- Based</li>
          <li>Learn Once, Write Anywhere</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Browser</li>
          <li> Text Editor/ IDE</li>
          <li>Command Line/Shell</li>
        </ul>
        <h3>Virtual DOM</h3>

        <p>
          Representasi dari UI berbentuk Javascript Object yang disimpan pada
          memori
        </p>
      </div>
    </>
  );
}
export default Penjelasan;
