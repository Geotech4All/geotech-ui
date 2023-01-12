import { gql } from "@apollo/client"

/**
 * Returns a list of podcasts ordered by highest listens
 */
export const MOST_LISTENED_PODCASTS = gql`
  query MostListenedToPodcast {
      podcasts: mostListenedToPodcasts {
          edges {
              node {
                  audio
                  dateAdded
                  description
                  podcastId
                  title
                  listens
              }
          }
      }
  }
`
