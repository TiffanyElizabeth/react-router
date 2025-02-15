import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import NewPost from "./pages/NewPost";
import BlogPosts from "./pages/BlogPosts";
import BlogsIndex from "./pages/BlogsIndex";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/blogposts" element={<BlogPosts />} />
          <Route path="/blogsindex" element={<BlogsIndex />} />
          <Route path="/blogposts/:id" element={<BlogPosts />} />"
        </Route>
      </Routes>
    </BrowserRouter>
  );
}