import { useReducer } from "react";
import { useQueryClient, useMutation } from "react-query";
import { addUser, getUsers } from "../lib/helper";

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
    if (Object.keys(formData).length == 0)
      return console.log("Enter Something");
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
          <div className="card text-dm border-dark">
            <div className="card-body">
              <h6 className="card-title">
                <textarea
                  name="firstname"
                  type="text"
                  className="form-control bg-dark border-0 text-light"
                  placeholder="title!"
                  onChange={setFormData}
                  autoComplete="off"
                  autoFocus
                  style={{ resize: "none" }}
                />
              </h6>
              <p className="card-text">
                <textarea
                  name="lastname"
                  type="text"
                  className="form-control bg-dark border-0 text-light"
                  placeholder="what's on your mind?"
                  onChange={setFormData}
                  autoComplete="off"
                  style={{ resize: "none" }}
                />
              </p>
              <button
                type="button"
                className="btn bg-black text-light rounded-pill mb-1 text-muted"
                onClick={handleSubmit}
              >
                create
                <i class="fa-solid fa-arrow-right ms-2 grow text-muted bg-black"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
