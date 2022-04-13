import "../../component/style.css";

function Penjelasan() {
  return (
    <>
      <div style={{ textAlign: "left" }} className="jarak-menu">
        <h2>Apa itu Versioning</h2>

        <p>mengatur versi dari source code program.</p>
        <h2>Apa itu GIT</h2>
        <p>
          salah satu version control system populer yang digunakan pada
          developer untuk mengembangkan sofware secara bersama-sama
        </p>
        <h2>GIT</h2>
        <ol>
          <li>git init = untuk pembuatan folder</li>
          <li>git remote = untuk sync ke github</li>
          <li>git add untuk masuk ke staging</li>
          <li>git commit -m untuk masuk ke packing yang siap dikirim </li>
          <li>git push masuk ke repository</li>
          <li>git status untuk cek status git kita</li>
          <li>
            git diff untuk cek di terminal apa saja yang di ubah/diganti pada
            source code kita.
          </li>
          <li>
            buat file .gitignore untuk buat atau memilih file atau folder yang
            tidak perlu di push.
          </li>
          <li>git log untuk melihat histori perubah </li>
          <li>git reset untuk menguncommit file</li>
          <li>git checkout untuk pindah branch </li>
          <li>
            git merge -ff(fast forward) untuk mengambil file yang ada pada
            master branch ke branch
          </li>
          <li>git branch featureA (nambah branch)</li>
        </ol>
        <h2>
          Note <em>GIT</em>
        </h2>
        <p>
          Development sebaiknya jangan di branch master, tetapi di branch
          Developmetn atau dipecah kembali sesuai dengan fitur&quot;nya.
        </p>
      </div>
      ;
    </>
  );
}
export default Penjelasan;
