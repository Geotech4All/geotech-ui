import { DropDownList, GInput, GTextArea } from "@components/common";
import { OpportunityEnum } from "@gql/codegen/graphql";
import React from "react";


export default function OpportunityForm() {
  return (
    <form>
      <GInput label="Title" placeholder="My opportunity title"/>
      <GTextArea label="Description" placeholder="More details about this opportunity" />
      <DropDownList options={[
        OpportunityEnum.Internship,
        OpportunityEnum.JobListing,
        OpportunityEnum.Scholarship
      ]}/>
    </form>
  )
}
