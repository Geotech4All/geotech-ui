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
