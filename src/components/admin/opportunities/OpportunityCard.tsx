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
      className={`
        group relative aspect-video w-full p-2 rounded border
        transition-all hover:border-black/20 border-black/5 flex flex-col`}>
        <div className="p-2">
            <time
                className="absolute top-1.5 right-3 text-sm font-semibold italic opacity-40"
                dateTime={opportunity?.lastUpdated}>{lastUpdated}</time>
            <h2 className={`
                font-semibold transition group-hover:text-black/50
                text-lg text-black/80`}>{opportunity?.title}</h2>

        </div>
      <div className="h-[1px] w-full bg-black/20"/>
      <div className="p-2">
          <p className="line-clamp-3 text-black/60 py-1 text-sm">{opportunity?.description}</p>
          <span className={`
              text-sm bg-black/70 group-hover:bg-black capitalize
              text-white font-semibold rounded-sm px-1 absolute transition
              bottom-1 right-1`}>{opportunity?.category?.title}</span>
      </div>
    </Link>
  )
}
