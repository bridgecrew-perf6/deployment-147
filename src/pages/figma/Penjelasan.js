import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      {" "}
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h3>FIGMA</h3>
        <p>
          is a vector graphics editor and prototype tool wich is primarily
          web-based, with additional offline feature enabled by desktop
          applications for MacOS and Windows.
        </p>
        <h3>Keuntungan FIGMA</h3>
        <ul>
          <li>free</li>
          <li>Berjalan di Mac dan PC</li>
          <li>Real time dalam tim kolaborasi</li>
          <li>Bisa import sketch files</li>
          <li>Integrad Developers hand-off</li>
          <li>fantastic Team library</li>
          <li>Integrated high-quality prototyping.</li>
        </ul>
        <h3>IDE / Tools</h3>
        <ul>
          <li>Importing old Sketch files</li>
          <li>Setting up new frames</li>
          <li>Grid and layout columns</li>
          <li>Layers and groups</li>
          <li>Images</li>
          <li>Typography</li>
        </ul>
      </div>
    </>
  );
}
export default Penjelasan;
