import { useParams } from "react-router";
import UseFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = UseFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleDelete= () =>{
    fetch('http://localhost:8000/blogs/' + blog.id , {
      method: 'DELETE'
    }).then(()=>{
      history.push(`/`);
    })
  }

  return (
    <div className="blog-details">
      {isPending && <di>Loading....</di>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
