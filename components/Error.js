export default function Error() {
  return (
    <>
      <div
        className="alert alert-danger alert-dismissible fade show container"
        role="alert"
      >
        <strong className="bg-transparent text-danger">holy cow!</strong> there
        is an error inside the server.
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
