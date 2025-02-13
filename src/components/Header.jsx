import { Link, NavLink, Outlet } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="blog-title" >
                <p className="title" > Programming </p>
            </div>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newpost">New Post</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogposts">Blog Posts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogposts2">Blog Posts 2</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}