import { SidebarLayout } from "@components/admin";
import { NextPageWithLayout } from "@pages/_app";
import Link from "next/link";
import React from "react";

const Blog: NextPageWithLayout = () => {
  return (
    <div className="p-3">
      <Link
        className={`
          hover:bg-red-500 active:bg-red-500 transition-all
          bg-red-400 p-2 px-3 text-lg text-white rounded-md`} href="/admin/blog/new">New Post</Link>
    </div>
  );
};

Blog.getLayout = SidebarLayout;

export default Blog;
