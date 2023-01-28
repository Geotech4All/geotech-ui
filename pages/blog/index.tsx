import { NavBarLayout } from "@components/frontFacing";
import { NextPageWithLayout } from "@pages/_app";
import React from "react";

const Blog: NextPageWithLayout = () => {
  return (
    <div>You have reached the blog page. Comming soon</div>
  );
};

Blog.getLayout = NavBarLayout;

export default Blog;
