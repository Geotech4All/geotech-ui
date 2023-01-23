/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@components/common";
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
    if (user?.fullName && user.fullName !== "None None" && user.fullName !== "") {
      setName(user.fullName)
    } else {
      setName(user?.email)
    }
  }, [user])

  function removeHandler(){
    if (user) {
      onRemove && onRemove(user)
    }
  }

  return (
    <div className="flex items-center gap-2 bg-red-100 pr-2 w-fit border-2 border-red-300 p-1 rounded-3xl">
      <div className="max-w-[2rem] rounded-full overflow-hidden">
        <img className="w-full object-cover"
          src={user?.profile?.image ?? ""}
          alt={name ?? "user avatar"} />
      </div>
      <span>{name}</span>
      {onRemove &&
        <Button
          type="button"
          onClick={removeHandler}
          className="p-1 transition-all hover:bg-red-400 hover:text-white active:bg-red-400 active:text-white rounded-full bg-red-300" icon={IoClose}/>
      }
    </div>
  )
};
