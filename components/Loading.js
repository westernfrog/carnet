export default function Loading() {
  return (
    <>
      <div className="d-flex align-items-center text-rubik">
        <strong>loading...</strong>
        <div
          className="spinner-border ms-auto text-light"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
}
