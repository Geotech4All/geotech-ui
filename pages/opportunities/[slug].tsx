import { Article, DateTime, Heading, PageLoadingRing, SomethingWentWrong, TipTapSection } from "@components/common";
import { NavBarLayout } from "@components/frontFacing";
import { useOpportunity } from "@gql/requests/queries/hooks";
import { NextPageWithLayout } from "@pages/_app";
import { useRouter } from "next/router";

const OpportunityDetail: NextPageWithLayout = () => {
    const router = useRouter();
    const opportunityId = router.query.slug?.toString().split("-")[0] as string;
    const { data, loading, error } = useOpportunity({ opportunityId });

    if (loading) return <PageLoadingRing />
    if (error) return <SomethingWentWrong error={error}/>
    return (
        <Article>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                    <Heading>{data?.opportunity?.title}</Heading>
                    <span className="w-fit p-3 rounded text-lg bg-black/90 text-white font-semibold">
                        {data?.opportunity?.category?.title}
                    </span>
                </div>
                <DateTime className="tex-lg md:text-2xl" date={String(data?.opportunity?.lastUpdated)}/>
            </div>
            <TipTapSection html={data?.opportunity?.content ?? ""}/>
        </Article>
    )
}

OpportunityDetail.getLayout = NavBarLayout;

export default OpportunityDetail;
