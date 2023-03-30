import React from 'react';
import Posts from "./Posts.jsx";
import Sidebar from "./Sidebar.jsx";

const Blog = () => {
    return (
        <section className="bg-gray-200 py-10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:max-w-3xl lg:mx-auto gap-5">
                    <Posts />
                    <Sidebar />
                </div>
            </div>
        </section>
    );
};

export default Blog;