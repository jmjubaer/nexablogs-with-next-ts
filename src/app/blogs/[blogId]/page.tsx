import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

export const generateStaticParams = async () => {
    const res = await fetch(`http://localhost:5000/blogs`);
    const blogs = await res.json();
    return blogs?.slice(0, 3)?.map((blog: Blog) => ({ blogId: blog?.id }));
};


// or Dynamic metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ blogId: string }>;
}) {
    const { blogId } = await params;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
    const blogs = await res.json();
    return {
        title: blogs.title,
        description: blogs.description,
    };
}

const BlogDetailsPage = async ({
    params,
}: {
    params: Promise<{ blogId: string }>;
}) => {
    const { blogId } = await params;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
    const blogs = await res.json();
    return (
        <div className='my-7'>
            <BlogDetailsCard blog={blogs} />
        </div>
    );
};

export default BlogDetailsPage;
