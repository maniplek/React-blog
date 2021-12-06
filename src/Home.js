// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import UseFetch from "./useFetch";

const Home = () => {
const { data: blogs , isPending , error} = UseFetch("http://localhost:8000/blogs");


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* // <button onClick={() =>setName('Manzi')}>Change Name</button> */}
      {/* // <p>{name}</p> */}
      {/* //we use it by creating search  */}
      {/* <BlogList blogs= {blogs.filter((blog)=> blog.author === "Maniple")} tittle = "Maniple's Blog" /> */}
    </div>
  );
};

export default Home;
