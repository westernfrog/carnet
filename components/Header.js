import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="container mt-5 d-flex align-items-center mb-lg-5">
        <ul className="nav mx-lg-auto">
          <li className="nav-item me-lg-5">
            <Link className="nav-link text-light ps-0" href="/">
              carnet
            </Link>
          </li>
          <li className="nav-item mx-4">
            <Link className="nav-link text-light" href="/">
              home
            </Link>
          </li>
          <li className="nav-item ms-lg-5">
            <Link className="nav-link text-light" href="/chat">
              chat&nbsp;&nbsp;
              <i className="fa-solid fa-comment-dots grow"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
