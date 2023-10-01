import { useParams } from "react-router";
import { useFetch } from "./useFetch";
//import { useFetch } from "../hooks/UseFetch";

const BlogDetails = () => {
  // useParams es un Hook para capturar los parametros pasados por url
  let params = useParams();

  // le pse esto y lo leo con params.id
  // <Route path="/blog/:id" element={<BlogDetails></BlogDetails>} />
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </div>
  );
};

export default BlogDetails;
