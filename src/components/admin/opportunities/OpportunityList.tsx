import React from "react";
import { useAllOpportunities } from "@gql/requests/queries/hooks";
import { CenterSLoadingRing, List, NothingFound, SomethingWentWrong } from "@components/common";
import { OpportunitiesListFilter, OpportunityCard } from "@components/admin";

interface OpportunityListProps {
  admin?: boolean;
}

export default function OpportunityList(props: OpportunityListProps) {
  const { admin } = props;
  const { refetch, loading, data, error } = useAllOpportunities()

  if (loading) return <CenterSLoadingRing />
  if (error) return <SomethingWentWrong error={error}/>

  const found_opportunities = (data?.opportunities?.edges && data.opportunities.edges.length < 1);

  const getCategory = (category: string) => {
    console.log(category)
    refetch({ category }).then(res => console.log(res))
  }

return (
    <div className="flex flex-col gap-3">
      <OpportunitiesListFilter getCategory={getCategory}/>
      {found_opportunities ? (
          <NothingFound caption="Sorry! No Opportunites we're found" />
      ):(
        <List title="New">
          {data?.opportunities?.edges.map(opportunity => (
            <OpportunityCard admin={admin}
                opportunity={opportunity?.node}
                key={opportunity?.node?.opportunityId} />
          ))}
        </List>
      )}
    </div>
  )
}
