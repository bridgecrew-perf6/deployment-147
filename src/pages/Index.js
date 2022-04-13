import Sidebar from "../component/Sidebar";

// import Penjelasan from "./Penjelasan";
import "../component/style.css";
import Gambarsatu from "./img/bg-1.jpg";
import Gambardua from "./img/bg-2.png";
import GambarHtml from "./img/html.png";
import GambarCss from "./img/css.png";
import GambarFigma from "./img/figma.jpeg";

function Index() {
  return (
    <div>
      <Sidebar />
      <div className="container">
        <div className="header">
          <nav>
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={Gambardua}
                    className="d-block w-100"
                    alt="capture"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Gambarsatu} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </nav>
          <div style={{ marginTop: "50px" }}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src={GambarFigma} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Figma</h5>
                    <p className="card-text">
                      is a vector graphics editor and prototype tool wich is
                      primarily web-based, with additional offline feature
                      enabled by desktop applications for MacOS and Windows ...
                    </p>
                    <a href="/Figma">Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={GambarHtml} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">HTML</h5>
                    <p className="card-text">
                      Hypertext Markup Language adalah bahasa markah standar
                      untuk dokumen yang dirancang untuk ditampilkan di peramban
                      internet. Ini dapat dibantu oleh teknologi ...
                    </p>
                    <a href="/Html">Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={GambarCss} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">CSS</h5>
                    <p className="card-text">
                      Cascading Style Sheet merupakan aturan untuk mengatur
                      beberapa komponen dalam sebuah web sehingga akan lebih
                      terstruktur dan seragam. CSS bukan merupakan ...
                    </p>
                    <a href="/Css">Selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
