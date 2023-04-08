import React from "react";
import { useAllOpportunities } from "@gql/requests/queries/hooks";
import { CenterSLoadingRing, NothingFound, SomethingWentWrong } from "@components/common";
import OpportunityCard from "./OpportunityCard";

interface OpportunityListProps {
  admin?: boolean;
}

export default function OpportunityList(props: OpportunityListProps) {
  const { admin } = props;
  const { loading, data, error } = useAllOpportunities()
  if (loading) return <CenterSLoadingRing />
  if (error) return <SomethingWentWrong error={error}/>

  const found_opportunities = (data?.opportunities?.edges && data.opportunities.edges.length < 1);

return (
    <div>
      {found_opportunities ? (
        <div className="flex items-center justify-center">
          <NothingFound
              caption="Sorry! No Opportunites we're found"
              className="max-w-md"/>
        </div>
      ):(
        <ul>{data?.opportunities?.edges.map(opportunity => (
          <OpportunityCard
              opportunity={opportunity?.node}
              key={opportunity?.node?.opportunityId} />
        ))}</ul>      
      )}
    </div>
  )
}
