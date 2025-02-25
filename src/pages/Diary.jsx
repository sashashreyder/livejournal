import { useState } from "react";
import "../styles/Diary.css";

function Diary() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [categories, setCategories] = useState(["Thoughts"]);
    const [selectedCategory, setSelectedCategory] = useState("Thoughts");
    const [newCategory, setNewCategory] = useState("");

    const addPost = () => {
        if (!newPost.trim()) return;

        const post = {
            id: Date.now(),
            text: newPost,
            category: selectedCategory,
            file: selectedFile,
            comments: [],
        };

        setPosts([post, ...posts]);
        setNewPost("");
        setSelectedFile(null);
    };

    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    const addCategory = () => {
        if (newCategory.trim() && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
            setNewCategory("");
        }
    };

    return (
        <div className="diary-container">

            <div className="new-post-section">
                <h2>New Post</h2>
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Write your thoughts..."
                ></textarea>

                <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />

                <div className="category-section">
                    <label>Select Category:</label>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="new-category">
                    <input
                        type="text"
                        placeholder="New Category"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                    />
                    <button onClick={addCategory}>Add</button>
                </div>

                <button className="post-button" onClick={addPost}>Post</button>
            </div>

            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <p>{post.text}</p>
                        {post.file && <p>📎 Attached File: {post.file.name}</p>}
                        <p className="category">Category: {post.category}</p>

                        <button onClick={() => deletePost(post.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Diary;

