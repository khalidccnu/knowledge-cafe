import React, {useEffect, useState} from 'react';
import {PulseLoader} from "react-spinners";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getBookmark} from "../utility/index.js";
import Posts from "./Posts.jsx";
import Sidebar from "./Sidebar.jsx";

const Blog = () => {
    const [loading, isLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [isBookmark, setIsBookmark] = useState(false);
    const [isRead, setIsRead] = useState(false);
    const [clearRead, setClearRead] = useState(false);
    const [sidebar, setSidebar] = useState([]);

    useEffect(_ => {
        setTimeout(async _ => {
            await fetch("./posts.json").then(r => r.json()).then(data => setPosts(data));
            isLoading(false);
        }, 2000);
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
        loading ? (
            <div className="w-fit mx-auto mt-10">
                <PulseLoader color="#36d7b7" />
            </div>
        ) : (
            <section className="bg-gray-200 py-10">
                <div className="container">
                    <div className="relative grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:max-w-3xl lg:mx-auto gap-5">
                        <Posts posts={posts} isBookmark={isBookmark} setIsBookmark={setIsBookmark} isRead={isRead} setIsRead={setIsRead} clearRead={clearRead} />
                        <Sidebar sidebar={sidebar} isBookmark={isBookmark} setIsBookmark={setIsBookmark} isRead={isRead} clearRead={clearRead} setClearRead={setClearRead} />
                    </div>
                </div>
                <ToastContainer />
            </section>
        )
    );
};

export default Blog;