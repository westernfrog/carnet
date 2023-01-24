export default function Error() {
  return (
    <>
      <div
        className="alert alert-danger alert-dismissible fade show container my-4"
        role="alert"
      >
        <strong className="bg-transparent text-danger">holy cow!</strong> there
        is an error inside the server.
      </div>
    </>
  );
}
