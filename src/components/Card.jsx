import { Link } from "react-router-dom";

export default function Card({ blog }) {
    return (
        <div className="blog-post">
            <Link to={`/blogposts/${blog.id}`}>
                <div>{blog.title}</div>
            </Link>
            <div>{blog.content}</div>
        </div>
    );
}