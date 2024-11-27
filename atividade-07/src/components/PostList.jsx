import { useState, useEffect } from "react";

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data.slice(0, 10)); 
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="p-4 text-white bg-slate-500 mt-6">
            <h1 className="text-4xl font-bold mb-4">Posts List</h1>
            <button
                onClick={fetchPosts}
                className="bg-sky-900 text-white px-4 py-2 rounded mb-4"
                disabled={loading}
            >
                {loading ? "Loading..." : "Reload Posts"}
            </button>

            {loading && <p className="text-gray-500">Loading posts...</p>}
            {!loading && posts.length === 0 && <p>No posts available.</p>}

            <ul className=" px-48">
                {posts.map((post) => (
                    <li key={post.id} className="mb">
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                        <p className="border-b-2 mb-2 p-4">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;
