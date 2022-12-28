import { useReducer } from "react";
import Notes from "../components/Notes";
import { useQueryClient, useMutation } from "react-query";
import { addUser, getUsers } from "../lib/helper";
import Header from "../components/Header";
import Footer from "../components/Footer";

const formReducer = (state, event) => {
  return { ...state, [event.target.name]: event.target.value };
};

export default function Home() {
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
      <Header />
      <div className="container my-5">
        <div class="row">
          <div class="col-md-7 mb-4 fs-5 text-dm">
            Easily share texts or links from mobile to PC or vice versa. <br />
            Whatsapp and other social medias takes time to share but here you
            can do it easily.
            <br /> <br />
            Can also be used to share the last moment answers in any exam. 😭🤌
          </div>

          <div class="col-md-5">
            <form onSubmit={handleSubmit}>
              <div class="card text-dm">
                <div class="card-header">CREATE to create a new note!</div>
                <div class="card-body">
                  <h5 class="card-title">
                    <input
                      name="firstname"
                      type="text"
                      className="form-control shadow-sm"
                      placeholder="Title.."
                      aria-label="Username"
                      onChange={setFormData}
                      autocomplete="off"
                    />
                  </h5>
                  <p class="card-text">
                    <input
                      name="lastname"
                      type="text"
                      className="form-control shadow-sm"
                      placeholder="Content.."
                      aria-label="Username"
                      onChange={setFormData}
                      autocomplete="off"
                    />
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark shadow-sm rounded-pill"
                    onClick={handleSubmit}
                  >
                    -create-
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Notes />
      <Footer />
    </>
  );
}
