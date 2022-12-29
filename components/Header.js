export default function Header() {
  return (
    <>
      <nav className="navbar navbar-light container my-3 border-bottom text-slab shadow-sm">
        <div className="container-fluid p-0">
          <h1 className="navbar-brand h1 fs-3">Carnet 📑</h1>
          <a
            href="https://github.com/westernfrog"
            target="_blank"
            rel="noreferrer"
            className="btn ms-auto fs-5 link-dark"
            type="submit"
          >
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
