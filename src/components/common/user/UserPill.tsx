/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import type { UserType, Maybe } from "@gql/codegen/graphql";

interface UserPillProps {
  user: Maybe<UserType>
};
export default function UserPill(props: UserPillProps) {
  const { user } = props;
  const [name, setName] = React.useState<string>();

  React.useEffect(() => {
    if (user?.fullName && user.fullName !== "None None" && user.fullName !== "") {
      setName(user.fullName)
    } else {
      setName(user?.email)
    }
  }, [])

  return (
    <div className="flex items-center gap-2 bg-red-100 w-fit pr-3 border-2 border-red-300 p-1 rounded-3xl">
      <div className="max-w-[2rem] rounded-full overflow-hidden">
        <img className="w-full object-cover"
          src={user?.profile?.image ?? ""}
          alt={name ?? "user avatar"} />
      </div>
      <span>{name}</span>
    </div>
  )
};
