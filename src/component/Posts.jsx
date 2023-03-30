import React, {useEffect, useState} from 'react';
import Post from "./Post.jsx";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(_ => {
        fetch("./posts.json").then(r => r.json()).then(data => setPosts(data));
    }, []);

    return (
        <div className="grid grid-cols-1 gap-5">
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;