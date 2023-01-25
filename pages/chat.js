import Form from "../components/Form";
import Header from "../components/Header";
import Notes from "../components/Notes";

export default function Chat() {
  return (
    <>
      <Header />
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="my-3">
              <h1 className="display-3 text-dm fw-bold">
                chat&nbsp;&nbsp;
                <i className="fa-solid fa-comment-dots grow"></i>
              </h1>
              <p className="text-secondary text-rubik mb-0">
                the data from the input field goes directly to{" "}
                <span className="fw-bold text-dark">MongoDB database</span> and
                that data is display in a form of note.
              </p>
            </div>
            <div className="text-rubik my-2">
              <Form />
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <Notes />
          </div>
        </div>
      </div>
    </>
  );
}
