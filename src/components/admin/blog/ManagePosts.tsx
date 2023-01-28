import { CenterSLoadingRing, GInput, SomethingWentWrong } from "@components/common";
import { Maybe, PostTypeConnection } from "@gql/codegen/graphql";
import { useAllPosts } from "@gql/requests/queries/hooks";
import React from "react";
import ManagePost from "./ManagePost";

interface ManagePostsProps {
}

export default function ManagePosts(props: ManagePostsProps) {
  const { loading, data, error, refetch } = useAllPosts({ first: 20 });
  const [posts, setPosts] = React.useState<Maybe<PostTypeConnection>>();

  React.useEffect(() => {
    setPosts(data?.posts);
  }, [data]);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
      console.log("Searching")
      refetch({title_Icontains: event.target.value})
      .then(res => {
        console.log(res.data.posts)
        setPosts(res.data.posts)
      })
      .catch(err => console.log(err));
  }

  if (error) return <SomethingWentWrong error={error} />;

  return (
    <>
      <div className={`p-3 bg-gray-100 rounded-3xl`}>
        <h4 className="font-bold text-red-600">Manage Posts</h4>
        <GInput
          onChange={handleSearch}
          classNameW="rounded-lg overflow-hidden focus-within:shadow"
          className="w-full p-1 text-sm px-3" placeholder="Search posts"/>
      {loading ? <CenterSLoadingRing />
      :(
        <ul className={`flex flex-col`}>
          {posts?.edges.map(edge => <ManagePost key={edge?.node?.postId} post={edge?.node}/>)}
        </ul>
      )}
      </div>
    </>
  );
};
