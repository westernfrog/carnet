export default function Loading() {
  return (
    <>
      <div className="d-flex align-items-center text-rubik mt-4">
        <strong>loading...</strong>
        <div
          className="spinner-border ms-auto text-dark spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
}
