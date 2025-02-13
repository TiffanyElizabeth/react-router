import { Link } from "react-router-dom";

export default function Card({ blog }) {
    return (
        <div className="blog-post">
            <Link to={`/blogposts2/${blog.id}`}>
                <div>{blog.title}</div>
                <div>{blog.content}</div>
            </Link>
        </div>
    );
}