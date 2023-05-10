import React from "react";
import SwiperCore, { A11y, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "@styles/Utils.module.scss"
import { CenterSLoadingRing, LargePodcastCard, NothingFound } from "@components/common"
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectTrendingPodcasts, setTrendingPodcasts } from "@store/slices";
import { useTrendingPodcasts } from "@gql/requests/queries/hooks";


export default function TrendingPodcasts(){
  SwiperCore.use([ Autoplay ])
  const trending = useAppSelector(selectTrendingPodcasts);
  const { loading, error, data } = useTrendingPodcasts({ first: 5 })
  const dispatch = useAppDispatch();

    const edges = trending?.edges;
  React.useEffect(() => {
    if (data?.podcasts) {
      dispatch(setTrendingPodcasts(data.podcasts));
    }
  }, [data, dispatch])

  if (loading) return <CenterSLoadingRing />
  if (error) console.log({ error })

  if (!edges || edges.length <= 0) return (
      <NothingFound caption="Sorry no podcasts were found"/>
  )

  return (
    <div className="relative z-0 flex flex-col gap-3">
      <h3 className="p-1 capitalize text-lg text-black/50 font-semibold">Trending</h3>
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
