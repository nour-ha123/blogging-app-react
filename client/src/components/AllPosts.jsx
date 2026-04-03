import { useState } from "react";
import exempleDonneesBlog from "../data/exampleData"; 
import PostDetails from "./PostDetails";



const AllPosts = () => {
  const [posts, setPosts] = useState(exempleDonneesBlog);

  return (
    <div className="all-post">
      {posts.map((post) => (
        <PostDetails post={post} />
      ))}
    </div>
  )
};

export default AllPosts;