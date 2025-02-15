import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogsIndex() {
    const [blogsList, setBlogsList] = useState([]);

    const fetchPosts = () => {
        axios.get("http://localhost:3000/posts/").then(function (response) {
            setBlogsList(response.data)
        });
    };

    useEffect(fetchPosts, []);

    const deleteAll = () => {
        setBlogsList([]);
    };

    const handleDelete = (blogId) => {
        axios.delete(`http://localhost:3000/posts/${blogId}`).then(() => {
            setBlogsList((currentBlogsList) =>
                currentBlogsList.filter((blog) => blog.id !== blogId));
        });
    };

    return (
        <>
            <div className="blog-index">
                <h2>blog posts.</h2>
                <ul>
                    {blogsList.map((blog) => (
                        <li key={blog.id}>
                            <Card blog={blog} /> <button className="btn-1" onClick={() => handleDelete(blog.id)}>🗑️</button><br /> <i></i></li>
                    ))}
                </ul>
                <button className="btn-2 delete-all" onClick={deleteAll}>delete all</button>
            </div>
        </>
    );
}