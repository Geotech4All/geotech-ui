import { gql } from "@apollo/client"

/**
 * Returns a list of podcasts ordered by highest listens
 */
export const MOST_LISTENED_PODCASTS = gql`
  query MostListenedToPodcasts(
    $after: String, $first: Int,
    $offset: Int, $before: String,
    $last: Int, $mostListenedToPodcastsId: Float,
    $titleIcontains: String, $titleIstartswith: String, $title: String) {
    podcasts: mostListenedToPodcasts(
      offset: $offset, before: $before,
      after: $after, first: $first, last: $last,
      id: $mostListenedToPodcastsId, title_Icontains: $titleIcontains,
      title_Istartswith: $titleIstartswith, title: $title) {
      edges {
        node {
          coverPhoto
          dateAdded
          description
          guests {
            name
          }
          hosts {
            hostId
            user {
              fullName
            }
          }
          listens
          podcastId
          title
          id
        }
      }
    }
  }
`

/**
 * Returns a list of users who've hosted a podcast before
 */
export const RECENT_HOSTS = gql`
  query RecentHosts {
    hosts: recentHosts {
      id
      fullName
      email
      profile {
        image
        profileId
      }
    }
  }
`

/**
 * Returns a list of staff level users. Authentication as admin is required
 */
export const STAFF_LIST = gql`
  query StaffList {
    staff: staffList {
      canCreatePost
      staffId
      id
      user {
        fullName
        id
        profile {
          profileId
          image
        }
      }
    }
  }
`

/**
 * Returns a list of all previouse guests
 */
export const PREVIOUS_GUESTS = gql`
  query PreviousGuests {
    guests: previousGuests {
      edges {
        node {
          id
          guestId
          name
          image
        }
      }
    }
  }
`
