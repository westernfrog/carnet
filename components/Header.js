import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-11">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-light ps-0" href="/">
                  carnet
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="/chat">
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
