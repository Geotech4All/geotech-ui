/* eslint-disable @next/next/no-img-element */
import { Maybe, UserType } from "@gql/codegen/graphql";
import React from "react";

interface UserOptionProps {
  user?: Maybe<UserType>;
  onSelect: (user: UserType) => void;
};
export default function UserOption(props: UserOptionProps){
  const { user, onSelect } = props;
  const [name, setName] = React.useState<string>();

  React.useEffect(() => {
    if (user?.fullName && user.fullName !== "None None" && user.fullName !== "") {
      setName(user.fullName);
    } else {
      setName(user?.email);
    }
    }, [user])

  function handleClick(){
    if (user) onSelect(user)
  };

  return (
    <button
      type="button"
      className="flex gap-3 items-center rounded-3xl transition-all active:bg-red-300 hover:bg-red-300 bg-red-100/20 w-full p-1"
      onClick={handleClick} title={name}>
      <div className="max-w-[2rem] rounded-full overflow-hidden">
        <img className="w-full object-cover" src={user?.profile?.image ?? ""} alt={name ?? "user avatar"} />
      </div>
      <span>{name}</span>
    </button>
  );
};
