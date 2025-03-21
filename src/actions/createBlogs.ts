"use server";
import { redirect } from "next/navigation";

export const createBlog = async (blog: FormData) => {
    // "use server" we can use this is a server component
    const blogData = Object.fromEntries(blog.entries());
    const res = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
    });
    const blogInfo = await res.json();
    if (blogInfo) {
        redirect(`/blogs/${blogInfo.id}`);
    }
};
