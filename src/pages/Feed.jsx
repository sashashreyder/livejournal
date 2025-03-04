import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import "../styles/Feed.css";

function Feed() {
    const [posts, setPosts] = useState([]);
    const [commentInputs, setCommentInputs] = useState({});

    useEffect(() => {
        const postsCollection = collection(db, "feedPosts");

        const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
            const postsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(postsData);
        });

        return () => unsubscribe();
    }, []);

    const handleInputChange = (postId, value) => {
        setCommentInputs({ ...commentInputs, [postId]: value });
    };

    const addComment = async (postId) => {
        if (!commentInputs[postId]?.trim()) return;

        const postRef = doc(db, "feedPosts", postId);
        const post = posts.find(post => post.id === postId);

        await updateDoc(postRef, {
            comments: [...(post.comments || []), commentInputs[postId]],
        });

        setCommentInputs({ ...commentInputs, [postId]: "" });
    };

    return (
        <div className="feed-container">
            <h2>Public Feed</h2>

            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <h3>{post.username || "Anonymous"}</h3>
                        <p>{post.text}</p>
                        {post.media && <img src={post.media} alt="Post media" className="post-media" />}
                        <p className="category">Category: {post.category}</p>

                        <div className="comment-section">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={commentInputs[post.id] || ""}
                                onChange={(e) => handleInputChange(post.id, e.target.value)}
                            />
                            <button onClick={() => addComment(post.id)}>Comment</button>
                        </div>

                        <div className="comments">
                            {post.comments && post.comments.map((comment, index) => (
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


