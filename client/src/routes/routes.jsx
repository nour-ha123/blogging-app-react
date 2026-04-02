
import { Routes, Route } from 'react-router-dom';
import CreatePost from "../components/CreatePost";
import AllPosts from "../components/AllPosts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/createPost" element={<CreatePost />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/" element />
    </Routes>
  );
};

export default AppRoutes;
