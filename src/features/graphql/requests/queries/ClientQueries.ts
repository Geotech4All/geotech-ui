import { gql } from "@apollo/client";

export const ALL_PODCASTS = gql`
  query AllPodcasts(
    $offset: Int, $before: String,
    $after: String, $first: Int,
    $last: Int, $id: Float, $title_Icontains: String,
    $title_Istartswith: String, $title: String
  ) {
    podcasts: allPodcasts(
      offset: $offset, before: $before,
      after: $after, first: $first,
      last: $last, id: $id,
      title_Icontains: $title_Icontains, title_Istartswith: $title_Istartswith,
      title: $title
    ) {
      edges {
        node {
          podcastId
          title
          description
          listens
          audio
          coverPhoto
          podcastId
          guests {
            guestId
            name
          }
          hosts {
            hostId
            user {
              fullName
            }
          }
        }
      }
    }
  }
`
