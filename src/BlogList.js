import { Link } from "react-router-dom";

const BlogList = ({blogs, tittle}) => {
         
    return (
        <div className="blog-list">
            <h2>{tittle}</h2>
       {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
          </Link>
          {/* <p>{blog.body}</p> */}
          <p>Written By {blog.author}</p>

        </div>
      ))}
        </div>
     );
}
 
export default BlogList;