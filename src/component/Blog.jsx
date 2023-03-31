import React, {useEffect, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Posts from "./Posts.jsx";
import Sidebar from "./Sidebar.jsx";
import {getBookmark} from "../utility/index.js";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [isBookmark, setIsBookmark] = useState(false);
    const [sidebar, setSidebar] = useState([]);

    useEffect(_ => {
        fetch("./posts.json").then(r => r.json()).then(data => setPosts(data));
    }, []);

    useEffect(_ => {
        const loadBookmark = [];
        const bookmark = getBookmark();

        if (posts.length) {
            posts.forEach(post => {
                bookmark.includes(post.id) ? loadBookmark.push(post) : null;
            });

            setSidebar(loadBookmark);
        }
    }, [posts, isBookmark]);

    return (
        <section className="bg-gray-200 py-10">
            <div className="container">
                <div className="relative grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:max-w-3xl lg:mx-auto gap-5">
                    <Posts posts={posts} isBookmark={isBookmark} setIsBookmark={setIsBookmark} />
                    <Sidebar sidebar={sidebar} isBookmark={isBookmark} setIsBookmark={setIsBookmark} />
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Blog;