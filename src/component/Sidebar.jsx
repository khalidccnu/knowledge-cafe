import React, {useEffect, useState} from 'react';
import 'boxicons';
import {toast} from "react-toastify";
import {deleteRead, getRead, removeBookmark} from "../utility/index.js";

const Sidebar = ({sidebar, isBookmark, setIsBookmark, isRead, clearRead, setClearRead}) => {
    const [totalRead, setTotalRead] = useState(0);

    const handleBookmark = (id, title) => {
        if (removeBookmark(id)) {
            toast(title.slice(0, 22) + "... has been removed from bookmark.");
            setIsBookmark(!isBookmark);
        } else {
            toast("Something went wrong.");
        }
    }

    const handleRead = _ => {
        deleteRead();
        toast("All post has been unread.");
        setClearRead(!clearRead);
    }

    useEffect(_ => {
        let total = 0;
        const read = getRead();

        for (let post in read) total += read[post];

        setTotalRead(total);
    }, [isRead, clearRead]);

    return (
        <div className="sticky top-0 h-fit space-y-2">
            <div className="relative h-fit p-4 rounded-box bg-base-100">
                {
                    totalRead > 0 ? <div className="spacer mb-3"></div> : null
                }
                <h3 className="font-semibold">Spent time on read: {totalRead} min</h3>
                {
                    totalRead > 0 ? (
                        <span className="absolute top-2 right-2 cursor-pointer" onClick={handleRead}>
                            <box-icon type='regular' name='trash' color='red' size='1rem'></box-icon>
                        </span>
                    ) : null
                }
            </div>
            <div className="h-fit p-4 rounded-box bg-base-100">
                    <h3 className="font-semibold">Bookmarked: {sidebar.length}</h3>
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
        </div>
    );
};

export default Sidebar;