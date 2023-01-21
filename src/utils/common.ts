import { podcastColors, PodcastColorType } from "@constants/podcastColors";

export function randomColor (): PodcastColorType{
  const index = Math.ceil(Math.random() * podcastColors.length -1)
  return podcastColors[index];
}
