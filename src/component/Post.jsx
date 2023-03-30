import React from 'react';
import 'boxicons';

const Post = ({post: {id, title, authorName, tags, publishDate, ratings, img: {author, post}, readTime}}) => {
    const publishMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec"];
    const getPublishDate = new Date(publishDate);
    const diffDate = new Date() - getPublishDate;
    let diffDateToDay = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let day, year;

    if (diffDateToDay > 365) {
        year = Math.floor(diffDateToDay / 365);
        year > 1 ? year += " Years ago" : year += " Year ago";
    } else {
        day = diffDateToDay;
        day > 1 ? day += " Days ago" : day += " Day ago";
    }

    return (
        <div className="card bg-base-100">
            <figure>
                <img src={post} alt="" className="w-full" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-1.5">
                        <img src={author} alt="" className="w-8 rounded-full" />
                        <div className="flex flex-col">
                            <h4 className="font-medium">{authorName}</h4>
                            <small className="-mt-1 text-gray-500">{
                                publishMonth[getPublishDate.getMonth()] + " " + getPublishDate.getDate() + " (" + (year ? year : day) + ")"
                            }</small>
                        </div>
                    </div>
                    <small className="place-self-start inline-flex items-center text-gray-500">
                        <span>{readTime} min read</span>
                        <box-icon name='bookmark' color='rgb(107 114 128)'></box-icon>
                    </small>
                </div>
                <h2 className="card-title mt-2">{title}</h2>
                <small className="-mt-3">{
                    [...Array(5)].map((_, idx) => {
                        return (
                            idx < Math.trunc(ratings) ? (
                                <box-icon type='solid' name='star' size='0.8rem' color='#ffa534' key={idx}></box-icon>
                            ) : !Number.isInteger(ratings) && idx === Math.trunc(ratings) ? (
                                <box-icon type='solid' name='star-half' size='0.8rem' color='#ffa534' key={idx}></box-icon>
                            ) : (
                                <box-icon type='regular' name='star' size='0.8rem' color='#ffa534' key={idx}></box-icon>
                            )
                        )
                    })
                }</small>
            </div>
            <div className="card-actions flex-col pb-8 pl-8 space-y-1.5">
                <div className="space-x-1">
                    {
                        tags.map((tag, idx) => <small className="text-gray-500" key={idx}>#{tag}</small>)
                    }
                </div>
                <button type="button" className="btn btn-sm btn-secondary text-white">Mark as read</button>
            </div>
        </div>
    );
};

export default Post;