import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
import Loading from "./Loading";
import Error from "./Error";

export default function Notes() {
  const { isLoading, isError, data, error } = useQuery("cheatsheet", getUsers);
  if (isLoading)
    return (
      <div className="container fs-3">
        <Loading />
        ...there are many notes and the database I am using is slow so have
        patience.
      </div>
    );
  if (isError) return <Error />;

  return (
    <>
      <div className="container text-dm">
        <div className="row">
          <div className="col-md-3">
            <div className="card mt-3 shadow-sm ">
              <div className="card-body">
                <h5 className="card-title fw-bold">Made with ❣️ using</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Next.js and MongoDB.
                </h6>
              </div>
            </div>
          </div>
          {data.map((obj, i) => (
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
      <div className="card mt-3 shadow-sm ">
        <div className="card-body">
          <h5 className="card-title fw-bold">{firstname || "Title"}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {lastname || "Content"}
          </h6>
        </div>
      </div>
    </div>
  );
}
