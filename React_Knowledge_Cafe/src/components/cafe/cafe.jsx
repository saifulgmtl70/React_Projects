// eslint-disable-next-line no-unused-vars
import React from 'react';

const Cafe = ({cafe}) => {
    // eslint-disable-next-line react/prop-types
    const{Cover_img, author_img, author_name, posted_date, reading_time, post_title, hash_tag} = cafe;
    return (
        <div className='h-full w-auto rounded-sm bg-slate-50 px-6 py-5 shadow-2xl'>
            <img src={Cover_img} alt="" className='w-full h-48 rounded-sm'/>
            <div className='flex justify-between items-center mb-4 mt-4'>
                <div className='flex gap-3'>
                    <img src={author_img} alt="" className='h-10 w-10 rounded-full '/>
                    <div>
                        <span className='text-lg text-slate-800 '> {author_name} </span>
                        <p> {posted_date} </p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='inline-block me-2'> {reading_time} min read</p>
                    <button className='bg-rose-600 px-5 py-1 rounded-sm text-white'>Book</button>
                </div>
            </div>
            <h2 className='block text-slate-900 font-bold text-2xl mb-3'>{post_title}</h2>
            <p>{hash_tag}</p>
            <button className='text-rose-600 underline mt-3'>Mark as Read</button>
        </div>
    );
};

export default Cafe;