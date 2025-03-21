"use client";
// make this as client component for testing RTK query
import BlogCard from "@/components/ui/BlogCard";
import Spinner from "@/components/ui/Spinner";
import { useGetBlogsQuery } from "@/redux/api/blogs.api";
import { Blog } from "@/types";
// Metadata can only use in server components
// import { Metadata } from "next";
// // either Static metadata
// export const metadata: Metadata = {
//     title: "NexaBlogs | Blog",
// };
const BlogsPage = () => {
    //  cache: "no-store"  is SSR
    // const res = await fetch("http://localhost:5000/blogs", {
    //     cache: "no-store",
    // });
    // const data = await res.json();
    const { data, isLoading } = useGetBlogsQuery({});
    if (isLoading) return <Spinner />;
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl text-center my-5 font-bold'>
                Blogs From <span className='text-teal-600'>NexaBlog</span>
            </h1>
            <p className='text-center text-gray-400 w-2/5 mx-auto'>
                <i>
                    Dive into the fascinating world of quantum computing, where
                    unlocking unprecedented computational power.
                </i>
            </p>
            <div className='grid grid-cols-3 gap-7 mt-10'>
                {data?.map((blog: Blog) => (
                    <BlogCard key={blog?.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;
