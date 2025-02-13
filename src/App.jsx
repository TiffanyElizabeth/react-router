import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import NewPost from "./pages/NewPost";
import BlogPosts from "./pages/BlogPosts";
import BlogPosts2 from "./pages/BlogPosts2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/blogposts" element={<BlogPosts />} />
          <Route path="/blogposts2" element={<BlogPosts2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}