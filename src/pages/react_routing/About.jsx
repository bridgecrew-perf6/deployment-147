function About() {
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
                  <a className="nav-link" aria-current="page" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <span className="nav-link active">ABOUT APP</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">ABOUT AUTHOR</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <h1>s</h1>
      <h1> INI ABOUT APP</h1>
      <p>
        in this app, you can add, delete, submit and edit items. To edit items,
        <br></br>
        simply double click on it. Once you are done, press the enter key to
        <br></br>
        resubmit. This app will persist your data in the browser local storage.
        <br></br>
        So whether you reload, close your app or reopened it, you still have
        <br></br>
        access to your to dos item
      </p>
    </div>
  );
}

export default About;
