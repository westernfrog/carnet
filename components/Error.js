export default function Error() {
  return (
    <>
      <div
        className="alert alert-danger alert-dismissible fade show container"
        role="alert"
      >
        <strong>Holy guacamole!</strong> Uncaught an error!.. this is definitely
        from the server side.
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
