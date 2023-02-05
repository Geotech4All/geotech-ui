import { gql } from "@apollo/client";

export const INCREASE_POST_VIEW_COUNT = gql`
  mutation IncreasePostViewCount($postId: ID!) {
    post: increasePostViewCount(postId: $postId) {
      errors {
        field
        messages
      field
        messages
      }
      success
      post {
        postId
        views
      }
    }
  }
`

export const INCREASE_PODCAST_LISTENS = gql`
  mutation IncreasePodcastListens($podcastId: ID!) {
    podcast: increasePodcastListens(podcastId: $podcastId) {
      errors {
        field
        messages
      }
      success
      podcast {
        listens
        podcastId
      }
    }
  }
`
