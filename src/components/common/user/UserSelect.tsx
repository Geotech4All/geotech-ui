import { Maybe, UserType } from "@gql/codegen/graphql";
import React from "react";
import { UserOption } from "@components/common";

interface UserSelectProps {
  users: Maybe<UserType>[];
  title?: string;
  onSelect: (user: UserType) => void;
};
export default function UserSelect(props: UserSelectProps){
  const { users, onSelect, title } = props;
  return (
    <div>
      {title && (
        <label
          className="before:content-['\2022'] before:text-lg before:text-red-500 text-black/60 font-semibold">
          {" " + title}
        </label>
      )}
      <ul className="flex flex-col p-1 rounded-2xl">
        {users.map(user => (
          <UserOption
            onSelect={onSelect}
            key={user?.id}
            user={user}/>
          ))}
      </ul>
    </div>
  );
};
