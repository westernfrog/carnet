let cdate = new Date();
cdate = cdate.getFullYear();

export default function Footer() {
  return (
    <>
      <footer className="d-flex mb-3 pt-4 mt-5 border-top container justify-content-between align-items-center">
        <p className="mb-0 text-dm">&copy; {cdate} Carnet 📑, Inc </p>
        <span className="ms-auto">
          <a
            href="https://github.com/westernfrog"
            className="link-dark"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
          <a
            className="link-dark"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/iam__amansingh"
          >
            <i class="fa-brands fa-instagram fa-lg mx-3"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.discordapp.com/users/888993682018168842"
            className="link-dark"
          >
            <i class="fa-brands fa-discord fa-lg"></i>
          </a>
        </span>
      </footer>
    </>
  );
}
