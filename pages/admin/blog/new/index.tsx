import { PostForm, SidebarLayout } from "@components/admin";
import { NextPageWithLayout } from "@pages/_app";
import React from "react";

const NewPost: NextPageWithLayout = () => {
  return (
    <div className="p-1 md:p-4 flex flex-col gap-2">
      <h1 className="font-extrabold text-lg md:text-2xl text-black/60">New Post</h1>
      <PostForm />
    </div>
  );
};
NewPost.getLayout = SidebarLayout;

export default NewPost;
