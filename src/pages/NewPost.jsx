import { useState, useEffect } from "react";
import axios from "axios";

export default function NewPost() {
    const [blogsList, setBlogsList] = useState([]);

    const fetchPosts = () => {
        axios.get("http://localhost:3000/posts/").then(function (response) {
            setBlogsList(response.data)
        });
    };

    useEffect(fetchPosts, []);

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        creator: "",
        content: "",
        category: "",
        published: false,
    });

    const handleFormField = (fieldName, value) => {
        setFormData((currentFormData) => ({
            ...currentFormData,
            [fieldName]: value,
        }));
    };

    const handleSubmit =
        (e) => {
            e.preventDefault();
            axios.post("http://localhost:3000/posts", formData).then((response) => {
                setBlogsList((currentBlogsList) => [...currentBlogsList, response.data]);
                setFormData({
                    title: "",
                    creator: "",
                    content: "",
                    category: "",
                    published: false,
                });
            });
        };

    useEffect(() => {
        console.log("react rendering");
    }, [formData.available]);

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
            <div className="new-post">
                <p>new post  :</p>
                <form onSubmit={handleSubmit}>
                    <div className="blog-basic-info">
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => handleFormField("title", e.target.value)}
                            placeholder="title"
                            required
                        />
                        <input
                            type="text"
                            value={formData.creator}
                            onChange={(e) => handleFormField("creator", e.target.value)}
                            placeholder="creator name"
                            required
                        />
                        <select
                            value={formData.category}
                            onChange={(e) => handleFormField("category", e.target.value)}
                            required
                        >
                            <option value="Choose one" hidden>Choose One</option>
                            <option value="Front End">Front End</option>
                            <option value="Back End">Back End</option>
                            <option value="UX/UI">UX/UI</option>
                        </select>
                    </div>
                    <textarea
                        value={formData.content}
                        onChange={(e) => handleFormField("content", e.target.value)}
                        placeholder="post body"
                        rows="10" cols="56"
                    />
                    <br />
                    <div className="publish">
                        <p>publish?</p>
                        <input
                            type="checkbox"
                            checked={formData.published}
                            onChange={(e) => handleFormField("published", e.target.checked)}
                        />
                    </div>
                    <button className="btn-2 submit" type="submit">add post</button>
                </form>
            </div>
        </>
    );
}