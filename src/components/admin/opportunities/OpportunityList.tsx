import React from "react";
import { useAllOpportunities } from "@gql/requests/queries/hooks";
import { CenterSLoadingRing, NothingFound, SomethingWentWrong } from "@components/common";
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
      <h1 className="text-lg font-semibold text-black/70">Oppotunities</h1>
      <OpportunitiesListFilter getCategory={getCategory}/>
      {found_opportunities ? (
        <div className="flex items-center justify-center">
          <NothingFound
              caption="Sorry! No Opportunites we're found"
              className="max-w-md"/>
        </div>
      ):(
        <ul className="flex w-full flex-wrap gap-3">
          {data?.opportunities?.edges.map(opportunity => (
            <OpportunityCard
                admin={admin}
                opportunity={opportunity?.node}
                key={opportunity?.node?.opportunityId} />
          ))}
        </ul>      
      )}
    </div>
  )
}
