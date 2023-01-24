import { useReducer } from "react";
import { useQueryClient, useMutation } from "react-query";
import { addUser, getUsers } from "../lib/helper";
import $ from "jquery";

const formReducer = (state, event) => {
  return { ...state, [event.target.name]: event.target.value };
};

export default function Form() {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useReducer(formReducer, {});
  const addMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.prefetchQuery("cheatsheet", getUsers);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) {
      $(".content").attr("placeholder", "write something :(");
      return console.log("Enter Something");
    }

    let { firstname, lastname } = formData;

    const model = {
      firstname,
      lastname,
    };

    addMutation.mutate(model);
  };
  if (addMutation.isLoading) return <div>Loading message..</div>;
  if (addMutation.isError) return <div>Error</div>;
  if (addMutation.isSuccess) location.reload();
  return (
    <>
      <div className="col-md-10 text-rubik">
        <form onSubmit={handleSubmit}>
          <div className="card text-dm border-0">
            <div className="card-body p-0">
              <p className="card-text">
                <textarea
                  name="firstname"
                  type="text"
                  className="form-control mb-2 border border-2"
                  placeholder="title"
                  onChange={setFormData}
                  autoComplete="off"
                  style={{ resize: "none", borderRadius: "9px" }}
                  required
                />
                <textarea
                  name="lastname"
                  type="text"
                  className="form-control g-3 border border-2 content"
                  placeholder="what's on your mind?"
                  onChange={setFormData}
                  autoComplete="off"
                  rows="4"
                  style={{ resize: "none", borderRadius: "9px" }}
                  required
                />
              </p>
              <button
                type="button"
                className="btn btn-sm rounded-pill mb-1 border border-2 grow"
                onClick={handleSubmit}
              >
                create
                <i className="fa-regular fa-paper-plane ms-2"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
