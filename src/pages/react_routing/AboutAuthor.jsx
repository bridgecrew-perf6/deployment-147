import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Tugas React Routing
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    onClick={() => navigate(1)}
                    className="nav-link"
                    aria-current="page"
                    href="/"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => navigate(1)}
                    className="nav-link active"
                    href="/"
                  >
                    ABOUT APP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    ABOUT AUTHOR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <h1>s</h1>
      <h1> INI ABOUT AUTHOR</h1>
      <p>
        This app Web Development by someone, a self-taught web developer and
        technical writer.
      </p>
    </div>
  );
}

export default About;
