import { Link } from "react-router-dom";
import { FaUserTie, FaRegCalendarAlt } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const SeeBlogs = ({Blogs}) => {

    // eslint-disable-next-line react/prop-types
    const {images: {first_img}, blogName, authorName, date, blogPost, id } = Blogs;

    return (
            <section>
                <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                    <img alt="Office" src={first_img} className="h-auto w-full lg:h-60" />

                    <div className="p-4 sm:p-6">
                        <div className="flex items-center gap-7 mb-4">
                            <p className="flex items-center gap-2 text-slate-500"> <FaUserTie className=" text-rose-500 font-bold"></FaUserTie> {authorName}</p>
                            <p className="flex items-center gap-2 text-slate-500"> <FaRegCalendarAlt className=" text-rose-500 font-bold"></FaRegCalendarAlt> {date}</p>
                        </div>
                        <Link >
                            <h3 className="text-lg font-bold mb-14 only: h-0 lg:h-3 text-gray-900 hover:text-orange-500 transition-all">{blogName}</h3>
                        </Link>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{blogPost}</p>

                        <Link to={`/blog/${id}`} href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose-500">See the blog

                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </Link>
                    </div>
                </article>
            </section>
    );
};

export default SeeBlogs;