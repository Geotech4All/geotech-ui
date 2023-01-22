import { NewPostForm, SidebarLayout } from "@components/admin";
import { NextPageWithLayout } from "@pages/_app";
import React from "react";

const NewPost: NextPageWithLayout = () => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h1 className="font-extrabold text-2xl text-red-300/80">New Post</h1>
      <NewPostForm />
    </div>
  );
};
NewPost.getLayout = SidebarLayout;

export default NewPost;
