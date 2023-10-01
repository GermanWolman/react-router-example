import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "./useFetch";
//import { useEffect } from "react";

const Blog = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  let [searchParams, setSearchParams] = useSearchParams();

  // esto es solo para ver en consola lo que trae searchParams
  /* useEffect(() => {
    // http://localhost:3000/blog?nombre=juan
    console.log(searchParams.get("nombre"));
    // setSearchParams({ nombre: "juan" });
  }, [searchParams]);*/

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      // el set nos sirve para modificar lo que viene en el search del navegador
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Blog</h1>
      <input
        className="form-control mb-2"
        type="text"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />
      {data
        .filter((item) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = item.title.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((item) => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}>
              {item.id} - {item.title}
            </Link>
          </h4>
        ))}
    </div>
  );
};

export default Blog;
