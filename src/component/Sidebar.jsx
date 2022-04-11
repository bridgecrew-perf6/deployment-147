function Sidebar() {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TOP Search React JS ( Class C )
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
              Main Menu
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Event_handle">
                  Event Handling
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Form_react">
                  React Form
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/React_hooks">
                  React Hook
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  React Rooting
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/React_redux">
                  React Redux
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
