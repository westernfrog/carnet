import Form from "../components/Form";
import Header from "../components/Header";
import Notes from "../components/Notes";

export default function Chat() {
  return (
    <>
      <Header />
      <div className="container d-flex align-items-center justify-content-between">
        <div className="col-lg-5 mx-auto px-lg-5">
          <div className="mt-5">
            <h1 className="display-3 text-dm fw-bold">
              chat&nbsp;&nbsp;
              <i className="fa-solid fa-comment-dots grow"></i>
            </h1>
            <p className="text-muted text-rubik mb-0">
              the data from the input field goes directly to{" "}
              <span className="fw-bold text-muted">MongoDB</span> database and
              that data is display in a form of note.
            </p>
          </div>
          <div className="text-rubik my-4">
            <Form />
          </div>
        </div>
      </div>
      <Notes />
    </>
  );
}
