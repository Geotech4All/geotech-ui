import { Maybe, UserType } from "@gql/codegen/graphql";
import React from "react";
import { UserOption } from "@components/common";

interface UserSelectProps {
  users: Maybe<UserType>[];
  title?: string;
  className?: string;
  onSelect: (user: UserType) => void;
};
export default function UserSelect(props: UserSelectProps){
  const { users, className, onSelect, title } = props;
  return (
    <div className={className}>
      {title && (
        <label
          className="before:content-['\2022'] before:text-lg before:text-red-500 text-black/60 font-semibold">
          {" " + title}
        </label>
      )}
      {users.length > 0 ?
        <ul className="flex flex-col p-1 rounded-2xl">
          {users.map(user => (
            <UserOption
              onSelect={onSelect}
              key={user?.id}
              user={user}/>
            ))}
        </ul>
        :<p className="text-black/50 p-2 flex items-center justify-center border-2 border-black/30 rounded-2xl text-lg">No Users yet</p>
      }
    </div>
  );
};
