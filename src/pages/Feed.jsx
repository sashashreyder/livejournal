import { useState } from "react";
import "../styles/Feed.css";

function Feed() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            username: "Alice",
            text: "Loving the new diary app!",
            category: "Thoughts",
            media: null,
            comments: [],
            commentInput: "",
        },
        {
            id: 2,
            username: "Bob",
            text: "A beautiful sunset I captured today.",
            category: "Photography",
            media: "https://source.unsplash.com/random/400x300",
            comments: [],
            commentInput: "",
        },
        {
            id: 3,
            username: "Charlie",
            text: "Reading an amazing book about React!",
            category: "Books",
            media: null,
            comments: [],
            commentInput: "",
        },
    ]);

    const handleInputChange = (postId, value) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, commentInput: value } : post
        ));
    };

    const addComment = (postId) => {
        setPosts(posts.map(post => {
            if (post.id === postId && post.commentInput.trim()) {
                return {
                    ...post,
                    comments: [...post.comments, post.commentInput],
                    commentInput: "", 
                };
            }
            return post;
        }));
    };

    return (
        <div className="feed-container">
            <h2>Public Feed</h2>

            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <h3>{post.username}</h3>
                        <p>{post.text}</p>
                        {post.media && <img src={post.media} alt="Post media" className="post-media" />}
                        <p className="category">Category: {post.category}</p>

                        <div className="comment-section">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={post.commentInput}
                                onChange={(e) => handleInputChange(post.id, e.target.value)}
                            />
                            <button onClick={() => addComment(post.id)}>Comment</button>
                        </div>

                        <div className="comments">
                            {post.comments.map((comment, index) => (
                                <p key={index} className="comment">{comment}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feed;

