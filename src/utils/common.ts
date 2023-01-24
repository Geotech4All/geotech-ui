import { podcastColors, PodcastColorType } from "@constants/podcastColors";

export function randomColor (): PodcastColorType{
  const index = Math.ceil(Math.random() * podcastColors.length -1)
  return podcastColors[index];
}

export function getRandom<Type>(list: Type[]): Type {
  const index = Math.ceil(Math.random() * list.length -1)
  return list[index]
}
