export default function Header() {
  return (
    <>
      <nav className="navbar navbar-light container my-3 border-bottom text-slab">
        <div className="container-fluid p-0">
          <h1 className="navbar-brand h1 fs-3">Cheatsheet</h1>
          <a className="btn ms-auto fs-5" type="submit">
            <span className="d-flex flex-wrap justify-content-between align-items-center">
              <span className="d-none d-lg-block pe-2">Github</span>
              <i class="fa-brands fa-github fa-lg"></i>
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}
