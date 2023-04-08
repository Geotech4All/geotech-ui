import { Maybe, OpportunityType } from "@gql/codegen/graphql";
import React from "react";


interface OpportunityCardProps {
  opportunity: Maybe<OpportunityType> | undefined
}

export default function OpportunityCard(props: OpportunityCardProps) {
  const { opportunity } = props;
  return (
    <div></div>
  )
}
