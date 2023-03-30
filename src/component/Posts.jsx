import React, {useEffect, useState} from 'react';
import Post from "./Post.jsx";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(_ => {
        fetch("./posts.json").then(r => r.json()).then(data => setPosts(data));
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 gap-5">
                {
                    posts.slice(0, showAll ? posts.length : 3).map(post => <Post key={post.id} post={post} />)
                }
            </div>
            {
                !showAll ? (
                    <div className="mt-6 text-center">
                        <button type="button" className="btn btn-sm btn-primary" onClick={_ => setShowAll(true)}>Show All</button>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Posts;