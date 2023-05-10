import { Maybe, UserType } from "@gql/codegen/graphql";
import React from "react";
import GImage from "../images/GImage";

interface PodcastHostPillProps {
    host: Maybe<UserType | undefined>
};

export default function PodcastHostPill(props: PodcastHostPillProps){
    const { host } = props
    return (
        <div
            className="flex items-center gap-1 bg-white/40 p-1 rounded-md pr-3"
            key={host?.id}>
            <GImage alt={host?.fullName ?? ""}
                src={host?.profile?.image ?? "/images/hosting-geo-tech.svg"}
                className="rounded overflow-hidden aspect-square w-[1.5rem]" />
            <small className="max-w-[5rem] whitespace-nowrap overflow-hidden text-ellipsis">
                {host?.fullName}
            </small>
        </div>
    );
};
