import React from "react";
import SwiperCore, { A11y, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "@styles/Utils.module.scss"
import { LargePodcastCard, NothingFound, SLoadingRing } from "@components/common"
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectTrendingPodcasts, setTrendingPodcasts } from "@store/slices";
import { useTrendingPodcasts } from "@gql/requests/queries/hooks";

interface TrendingPodcastsProps{
  isAdmin: boolean;
}

export default function TrendingPodcasts(props: TrendingPodcastsProps){
  SwiperCore.use([ Autoplay ])
  const trending = useAppSelector(selectTrendingPodcasts);
  const { loading, error, data } = useTrendingPodcasts({ first: 5 })
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (data?.podcasts) {
      dispatch(setTrendingPodcasts(data.podcasts));
    }
  }, [data, dispatch])

  if (loading) return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <SLoadingRing />
    </div>
  )

  if (error) console.log({ error })

  if (!trending?.edges || trending?.edges.length <= 0) return (
    <div className="flex items-center justify-center">
      <NothingFound
        isAdmin={props.isAdmin}
        url="admin/podcasts"
        caption="Sorry no podcasts were found"
        name="Podcasts" />
    </div>
  )

  return (
    <div className="relative z-0">
      <h3 className="p-1 capitalize font-semibold">Trending Podcasts</h3>
      <div className="flex max-w-md p-1 md:max-w-2xl items-center w-full">
        <Swiper
          autoplay={{ pauseOnMouseEnter: true }}
          modules={[ A11y, Pagination, Autoplay ]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="flex flex-col gap-3">
          { trending?.edges.map(podcast => (
            <SwiperSlide key={podcast?.node?.podcastId}>
              <LargePodcastCard podcast={podcast}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
