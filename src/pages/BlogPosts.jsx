import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function BlogPosts() {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`).then((response) => { setBlog(response.data); })
    }, [id, navigate]);

    return (
        <div>
            <Link to="/blogposts">Go back to the blogs index</Link>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    )
}
