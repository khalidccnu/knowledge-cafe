import React, {useState} from 'react';
import Post from "./Post.jsx";

const Posts = ({posts, isBookmark, setIsBookmark, isRead, setIsRead, clearRead}) => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div>
            <div className="grid grid-cols-1 gap-5">
                {
                    posts.slice(0, showAll ? posts.length : 3).map(post => <Post key={post.id} post={post} isBookmark={isBookmark} setIsBookmark={setIsBookmark} isRead={isRead} setIsRead={setIsRead} clearRead={clearRead} />)
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