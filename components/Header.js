import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="container my-5 text-dm">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-11">
            <ul className="nav">
              <li className="nav-item me-lg-5">
                <Link className="nav-link link-dark ps-0 link" href="/">
                  carnet
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link link-dark link" href="/">
                  home
                </Link>
              </li>
              <li className="nav-item ms-lg-5">
                <Link className="nav-link link-dark link" href="/chat">
                  chat&nbsp;&nbsp;
                  <i className="fa-solid fa-comment-dots grow"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
