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
          coverPhoto {
            url
            description
            imageId
          }
          dateAdded
          audio {
            url
            fileId
            description
          }
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
        image {
            url
            description
            imageId
        }
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
        email
        firstName
        lastName
        fullName
        id
        profile {
          profileId
          image {
            url
            description
            imageId
          }
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

export const ALL_POSTS = gql`
  query AllPosts($offset: Int, $before: String, $after: String, $first: Int, $last: Int, $dateAdded: DateTime, $dateAddedIcontains: DateTime, $dateAddedIstartswith: DateTime, $title: String, $titleIcontains: String, $titleIstartswith: String, $bodyIcontains: String, $bodyIstartswith: String, $readLength: Float, $readLengthIcontains: Float, $readLengthIstartswith: Float, $likes: Int, $dislikes: Int) {
    posts: allPosts(offset: $offset, before: $before, after: $after, first: $first, last: $last, dateAdded: $dateAdded, dateAdded_Icontains: $dateAddedIcontains, dateAdded_Istartswith: $dateAddedIstartswith, title: $title, title_Icontains: $titleIcontains, title_Istartswith: $titleIstartswith, body_Icontains: $bodyIcontains, body_Istartswith: $bodyIstartswith, readLength: $readLength, readLength_Icontains: $readLengthIcontains, readLength_Istartswith: $readLengthIstartswith, likes: $likes, dislikes: $dislikes) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          dateAdded
          postId
          readLength
          abstract
          coverPhoto {
            url
            description
            imageId
          }
          title
          author {
            profile {
              image {
                url
                description
                imageId
              }
            }
            fullName
          }
        }
      }
    }
  }
`

export const GET_PODCAST_BY_ID = gql`
  query GetPodcastById($podcastId: ID!) {
    podcast: getPodcastById(podcastId: $podcastId) {
      audio {
        url
        fileId
        description
      }
      coverPhoto {
        url
        description
        imageId
      }
      dateAdded
      description
      guests {
        id
        guestId
        image
        name
      }
      hosts {
        dateAdded
        id
        hostId
        user {
          fullName
          email
          profile {
            image {
              url
              description
              imageId
            }
            profileId
          }
          id
        }
      }
      title
      podcastId
      listens
    }
  }
`

export const GET_CURRENT_USER = gql`
  query MeUser {
    user: me {
      firstName
      lastName
      email
      id
      fullName
      staff {
        staffId
        canAlterPost
        canCreatePost
        canDeletePost
        canAlterUser
        canCreateUser
        canDeleteUser
        canAlterPodcast
        canCreatePodcast
        canDeletePodcast
        canUpdateOpportunities
        canCreateOpportunities
        canDeleteOpportunities
      }
      profile {
        about
        image {
          url
          description
          imageId
        }
        profileId
      }
    }
  }
`

export const STAFF_DETAIL = gql`
  query StaffDetail($staffId: ID!) {
    staff: staffDetail(staffId: $staffId) {
    staffId
    canAlterPost
    canCreatePost
    canDeletePost
    canAlterUser
    canCreateUser
    canDeleteUser
    canAlterPodcast
    canCreatePodcast
    canDeletePodcast
    canUpdateOpportunities
    canCreateOpportunities
    canDeleteOpportunities
      user {
        email
        fullName
        profile {
          image {
            url
            description
            imageId
          }
        }
      }
    }
  }
`

export const IMAGES = gql`
    query Images ($offset: Int, $after: String, $first: Int, $description_Icontains: String, $description: String, $folder_Iexact: String) {
      images (offset: $offset,  after: $after, first: $first, description_Icontains: $description_Icontains, description: $description, folder_Iexact: $folder_Iexact) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            url
            description
            imageId
          }
          cursor
        }
      }
    }
`

export const USER = gql`
    query User($id: ID!) {
      user(id: $id) {
        id
        fullName
        profile {
          image {
            url
            description
            imageId
          }
        }
      }
    }
`

export const FILES = gql`
    query Files ($offset: Int, $before: String, $first: Int, $after: String, $name_Icontains: String, $description_Icontains: String, $folder_Iexact: String) {
      files (offset: $offset, before: $before, first: $first, after: $after, name_Icontains: $name_Icontains, description_Icontains: $description_Icontains, folder_Iexact: $folder_Iexact) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            url
            name
            description
            fileId
          }
        }
      }
    }
`
