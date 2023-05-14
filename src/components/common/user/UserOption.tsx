/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GImage, UIButton } from "@components/common"
import { Maybe, UserType } from "@gql/codegen/graphql";

interface UserOptionProps {
  user?: Maybe<UserType> | undefined;
  onSelect: (user: UserType) => void;
};
export default function UserOption(props: UserOptionProps){
    const { user, onSelect } = props;
    const [name, setName] = React.useState<string>();

    React.useEffect(() => {
        if (user?.fullName && user.fullName !== "None None") {
          setName(user.fullName);
        } else { setName(user?.email); }
    }, [user])

    function handleClick(){
        if (user) onSelect(user)
    };

    return (
        <UIButton type="button" variant="Black" onClick={handleClick} title={name}
            className="w-full bg-black/60 flex items-center gap-2 rounded-md">
            <GImage src={user?.profile?.image ?? "/images/guy-profile.svg"} alt={name ?? "user avatar"}
                className="max-w-[4rem] rounded bg-black/80 aspect-square"/>
          <span>{name}</span>
        </UIButton>
    );
};
