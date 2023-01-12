import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
import Loading from "./Loading";
import Error from "./Error";

export default function Notes() {
  const { isLoading, isError, data, error } = useQuery("cheatsheet", getUsers);
  if (isLoading)
    return (
      <div className="container fs-6 text-rubik">
        <Loading />
        ...there are many notes and the database I am using is slow so have
        patience.
      </div>
    );
  if (isError) return <Error />;

  return (
    <>
      <div className="container text-rubik my-5">
        <p className="fw-bold text-center my-5">
          note junk<i class="fa-solid fa-arrow-down ms-2 grow"></i>
        </p>
        <div className="row">
          <div className="col-md-3">
            <div className="card mt-3 shadow-sm border-0">
              <div className="card-body bg-dark">
                <p className="card-title bg-dark">made with ❣️ using</p>
                <p className="card-subtitle mb-2 bg-dark">
                  next.js and mongodb.
                </p>
              </div>
            </div>
          </div>

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
    <div className="col-md-3">
      <div className="card mt-3 shadow-sm border-0">
        <div className="card-body bg-dark">
          <p className="card-title bg-dark">{firstname || "title"}</p>
          <p className="card-subtitle mb-2 bg-dark">{lastname || "content"}</p>
        </div>
      </div>
    </div>
  );
}
