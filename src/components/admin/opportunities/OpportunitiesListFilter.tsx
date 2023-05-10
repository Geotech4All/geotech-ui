import { DropDownList } from "@components/common";
import { useAllTags } from "@gql/requests/queries/hooks";
import { HiFilter } from "react-icons/hi";
import React from "react";

interface OpportunitiesListFilterProps {
  getCategory: (category: string) => void;
}

export default function OpportunitiesListFilter(props: OpportunitiesListFilterProps){
  const { getCategory } = props;
  const { data } = useAllTags({ category_Iexact: "opportunity" })

  const categories = data?.tags?.edges.map(tag => String(tag?.node?.title));
  
  return (
    <div className="flex items-center gap-2">
      <span
        className={`
          flex items-center px-2 p-1 text-white font-semibold rounded
          gap-2 bg-black/90`}><HiFilter /> Filter</span>
      <DropDownList full name="Category" getCurrent={getCategory} options={categories ?? []}/>
    </div>
  )
};
