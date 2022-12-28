import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";

export default function Notes() {
  const { isLoading, isError, data, error } = useQuery("cheatsheet", getUsers);
  if (isLoading) return <div>Messages are loading..</div>;
  if (isError) return <div>Got an Error</div>;

  return (
    <>
      <div class="container px-0 text-dm">
        <div class="row">
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
    <div class="col-md-3">
      <div class="card mt-3 shadow-sm" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{firstname || "Title"}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{lastname || "Content"}</h6>
        </div>
      </div>
    </div>
  );
}
