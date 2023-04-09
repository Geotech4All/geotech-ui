import { Maybe, OpportunityType } from "@gql/codegen/graphql";
import Link from "next/link";
import React from "react";


interface OpportunityCardProps {
  opportunity: Maybe<OpportunityType> | undefined;
  admin?: boolean
}

export default function OpportunityCard(props: OpportunityCardProps) {
  const { opportunity, admin } = props;
  const lastUpdated = String(opportunity?.lastUpdated).split("T")[0];
  const slug = `${opportunity?.opportunityId}-${opportunity?.title.toLowerCase().split(" ").join("-")}`
  return (
    <Link href={`${admin ? '/admin': ''}/opportunities/${slug}`}
      className="shadow relative flex-1 min-w-[15rem] p-2 rounded-lg flex flex-col">
      <time
        className="absolute top-2 right-2 text-sm font-semibold italic opacity-40"
        dateTime={opportunity?.lastUpdated}>{lastUpdated}</time>
      <h2 className="font-semibold text-lg text-black/80">{opportunity?.title}</h2>
      <div className="h-[1px] w-full bg-black/20"/>
      <p className="line-clamp-3 text-black/60 py-1 text-sm">{opportunity?.description}</p>
      <span
        className={`
          text-sm bg-blue-800 capitalize text-white font-semibold
          rounded px-1 absolute bottom-1 right-1`}>{opportunity?.category?.title}</span>
    </Link>
  )
}
