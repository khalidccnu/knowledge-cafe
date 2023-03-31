import React from 'react';
import 'boxicons';
import {removeBookmark} from "../utility/index.js";
import {toast} from "react-toastify";

const Sidebar = ({sidebar, isBookmark, setIsBookmark}) => {
    const handleBookmark = (id, title) => {
        if (removeBookmark(id)) {
            toast(title.slice(0, 22) + "... has been removed from bookmark.");
            setIsBookmark(!isBookmark);
        } else {
            toast("Something went wrong.");
        }
    }

    return (
        <div className="sticky top-0 h-fit p-4 rounded-box bg-base-100">
            <h3 className="font-semibold">Bookmarked Blogs: {sidebar.length}</h3>
            {
                sidebar.length === 0 ? null : <div className="spacer mt-5"></div>
            }
            <div className="flex flex-col space-y-1.5">
                {
                    sidebar.map(post => {
                        return (
                            <div className="relative p-4 pt-6 rounded bg-gray-100 font-medium text-sm" key={post.id}>
                                <span>{post.title}</span>
                                <span className="absolute top-2 right-2 cursor-pointer" onClick={_ => handleBookmark(post.id, post.title)}>
                                    <box-icon type='regular' name='bookmark-minus' color='red' size='1rem'></box-icon>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;