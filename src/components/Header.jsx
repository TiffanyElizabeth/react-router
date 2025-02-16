import { Link, NavLink, Outlet } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="blog-title" >
                <p className="title" > Food Blog </p>
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
                        <NavLink to="/blogsindex">Blogs Index</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}