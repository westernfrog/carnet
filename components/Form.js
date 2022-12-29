import { useReducer } from "react";
import { useQueryClient, useMutation } from "react-query";
import { addUser, getUsers } from "../lib/helper";

const formReducer = (state, event) => {
  return { ...state, [event.target.name]: event.target.value };
};

export default function Form(params) {
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
      <div class="col-md-4">
        <form onSubmit={handleSubmit}>
          <div class="card text-dm border-dark shadow-sm">
            <div class="card-header shadow-sm mb-3">
              <mark className="fw-bold">-create-</mark> a new note! <br /> Also
              this note will be visible to every person using this site around
              the globe 🌏.
            </div>
            <div class="card-body">
              <h6 class="card-title">
                <input
                  name="firstname"
                  type="text"
                  className="form-control shadow-sm"
                  placeholder="Title.."
                  aria-label="Username"
                  onChange={setFormData}
                  autoComplete="off"
                  autoFocus
                />
              </h6>
              <p class="card-text">
                <input
                  name="lastname"
                  type="text"
                  className="form-control shadow-sm"
                  placeholder="Content.."
                  aria-label="Username"
                  onChange={setFormData}
                  autoComplete="off"
                />
              </p>
              <button
                type="button"
                className="btn btn-dark shadow-sm rounded-pill mb-2"
                onClick={handleSubmit}
              >
                -create-
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
