import React from "react";
import SwiperCore, { A11y, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "@styles/Utils.module.scss"
import { LargePodcastCard, NothingFound } from "@components/common"
import { useAppSelector } from "@store/hooks";
import { selectTrendingPodcasts } from "@store/slices";

export default function TrendingPodcasts(){
  SwiperCore.use([ Autoplay ])
  const trending = useAppSelector(selectTrendingPodcasts);

  if (!trending || trending?.edges.length <= 0) return (
    <NothingFound
      url="admin/podcasts"
      caption="Sorry no podcasts were found"
      name="Podcasts" />
  )

  return (
    <div>
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
