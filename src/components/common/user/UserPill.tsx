/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GImage, UIButton } from "@components/common";
import { IoClose } from "react-icons/io5";
import type { UserType, Maybe } from "@gql/codegen/graphql";

interface UserPillProps {
  user: Maybe<UserType>
  onRemove?: (user: UserType) => void;
};
export default function UserPill(props: UserPillProps) {
  const { user, onRemove } = props;
  const [name, setName] = React.useState<string>();

  React.useEffect(() => {
    if (user?.fullName && user.fullName !== "None None") {
      setName(user.fullName)
    } else { setName(user?.email) }
  }, [user])

  function removeHandler(){
    if (user) { onRemove && onRemove(user) }
  }

  return (
    <div className="flex items-center gap-2 bg-black/10 w-fit border-2 border-black/60 p-1 rounded-lg">
      <GImage className="max-w-[2rem] aspect-square object-cover bg-black/40 rounded"
          src={user?.profile?.image?.url ?? "/images/guy-profile.svg"} alt={user?.profile?.image?.description ?? ""} />
      <span className="text-sm whitespace-nowrap">{name}</span>
      {onRemove &&
        <UIButton variant="Black" className="aspect-square p-0.5 px-0.5" type="button" onClick={removeHandler} icon={IoClose}/>
      }
    </div>
  )
};
