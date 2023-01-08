export default function Error() {
  return (
    <>
      <div
        className="alert alert-dark alert-dismissible fade show container text-light"
        role="alert"
      >
        <strong>holy cow!</strong> there is an error inside the server.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}
