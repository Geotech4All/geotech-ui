import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Confirmation, GImage, Hideable, MiniPostCard, MModal } from "@components/common";
import { Maybe, PostType } from "@gql/codegen/graphql";
import Link from "next/link";
import { useDeletePost } from "@gql/requests/mutations/hooks";
import { ApolloError } from "@apollo/client";
import { useIsMidScreen } from "@components/common/hooks";

interface ManagePostProps {
  post?: Maybe<PostType>;
  onDelete?: () => void;
  onError?: (error: ApolloError) => void;
}

export default function ManagePost(props: ManagePostProps){
  const { post, onDelete, onError } = props;
  const [mutate] = useDeletePost();
  const [showHoverInfo, setShowHoverInfo] = React.useState(false)
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  const isMid = useIsMidScreen();

  const handleHover = () => setShowHoverInfo(true)
  const handleHoverEnd = () => setShowHoverInfo(false)
  const openDeleting = () => setDeleting(true)
  const closeDeleting = () => setDeleting(false)

  const slug = post?.title.toLowerCase().split(" ").join("-")

  const handleDelete = () => {
    mutate({ variables: { postId: post?.postId ?? ""}})
    .then(() => {
      onDelete && onDelete();
    })
    .catch(err => onError && onError(err as ApolloError));
  };

  React.useEffect(() => {
    setIsSmallScreen(!isMid);
  }, [isMid]);

  return (
    <>
      <article
        onMouseOver={handleHover} onMouseLeave={handleHoverEnd}
        className={`
          relative flex items-center justify-between
          hover:bg-white hover:shadow-lg z-0
          p-1 group transition-all rounded-2xl`}>
        {(showHoverInfo && !isSmallScreen) &&(
          <PostHoverInfo post={post} />
        )}
        <div className="flex items-center gap-4">
          <GImage
            className="max-w-[2.5rem] aspect-square rounded-full"
            src={post?.coverPhoto?.url ?? "/images/reading-geo-tech.svg"} alt={`${post?.title} cover photo`}/>
          <h3 className="group-hover:text-red-400 transition-all line-clamp-1">{post?.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Hideable>
            <>
              <Link
                className={`
                  flex items-center gap-1
                  border border-blue-400
                  p-0.5 px-2 rounded bg-blue-400/10 text-blue-900 hover:bg-blue-400/40 transition-all`}
                href={`/admin/blog/edit/${post?.postId}-${slug}`}><CiEdit />Edit</Link>
              <Button
                onClick={openDeleting}
                className={`
                  flex items-center bg-red-600/10 rounded p-0.5
                  hover:bg-red-600/30 transition-all active:bg-red-600/30
                  border border-red-500/70 text-red-600`}
                icon={MdOutlineDeleteOutline}>Delete</Button>
            </>
          </Hideable>
          <MModal open={deleting} onClose={closeDeleting}>
            <Confirmation
              onCancel={closeDeleting}
              onConfirm={handleDelete}
              confirmPrompt="Yes! delete"
              cancelPrompt="No! cancel"
              item={{ name: post?.title ?? "", imageSrc: post?.coverPhoto?.url ?? ""}}
              message="Are you sure you want to delete this Post?"/>
          </MModal>
        </div>
      </article>
    </>
  )
}

function PostHoverInfo(props: ManagePostProps) {
  const { post } = props;
  return (
    <AnimatePresence>
      <motion.div
        className="absolute left-6 bottom-full bg-white"
        key={post?.postId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {post && <MiniPostCard post={post}/>}
      </motion.div>
    </AnimatePresence>
  );
}
