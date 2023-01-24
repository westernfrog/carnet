import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
import Loading from "./Loading";
import Error from "./Error";

export default function Notes() {
  const { isLoading, isError, data } = useQuery("cheatsheet", getUsers);
  if (isLoading)
    return (
      <div className="container fs-6 text-rubik px-0">
        <Loading />
        ...there are many notes and the database I am using is slow so have
        patience.
      </div>
    );
  if (isError) return <Error />;

  return (
    <>
      <div className="container text-rubik my-4 px-0">
        <div className="row">
          {data.reverse().map((obj, i) => (
            <Note {...obj} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
function Note({ firstname, lastname }) {
  return (
    <div className="col-md-4">
      <div
        className="card mt-3 shadow-sm border-3 grow"
        style={{ borderRadius: "9px" }}
      >
        <div className="card-body">
          <p className="card-title mb-2 fw-bold">
            {firstname || "a better title"}
          </p>
          <p className="card-subtitle mb-2">{lastname || "content"}</p>
        </div>
      </div>
    </div>
  );
}
