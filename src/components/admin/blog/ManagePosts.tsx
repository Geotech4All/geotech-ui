import { ApolloError } from "@apollo/client";
import { CenterSLoadingRing, GInput, SomethingWentWrong, PopupError } from "@components/common";
import { useAllPosts } from "@gql/requests/queries/hooks";
import React from "react";
import ManagePost from "./ManagePost";


export default function ManagePosts() {
  const { loading, data, error, refetch } = useAllPosts({ first: 20 });
  const [delError, setDelError] = React.useState<ApolloError>();
  const posts = data?.posts?.edges;

  const handleDelete = () => {
    refetch().catch(err => console.log(err));
  };

  const handleDelError = (error: ApolloError) => {
    setDelError(error);
  };

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
      refetch({title_Icontains: event.target.value}).catch(err => console.log(err));
  }

  if (error) return <SomethingWentWrong error={error} />;

  return (
    <>
      <div className={`p-3 flex flex-col gap-3 bg-gray-50 rounded-lg`}>
        <h4 className="font-bold text-black/70 text-lg">Manage Posts</h4>
        <GInput
          onChange={handleSearch}
          classNameW="rounded-lg overflow-hidden focus-within:shadow"
          className="w-full p-1 text-sm px-3" placeholder="Search posts"/>
      {loading ? <CenterSLoadingRing />
      :(
        <ul className={`flex flex-col`}>
          {posts?.map(edge => (
            <ManagePost
              onError={handleDelError}
              onDelete={handleDelete}
              key={edge?.node?.postId} post={edge?.node}/>
          ))}
        </ul>
      )}
      </div>
      {delError && <PopupError error={delError} />}
    </>
  );
};
