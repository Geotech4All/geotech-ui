import { gql } from "@apollo/client";

export const CREATE_UPDATE_PODCAST = gql`
  mutation CreateUpdatePodcast($description: String!, $hostIds: [ID]!, $title: String!, $audio: Upload, $coverPhoto: Upload, $podcastId: ID, $guestIds: [ID]) {
    createUpdatePodcast(description: $description, hostIds: $hostIds, title: $title, audio: $audio, coverPhoto: $coverPhoto, podcastId: $podcastId, guestIds: $guestIds) {
      errors {
        field
        messages
      }
      success
      podcast {
        coverPhoto
        dateAdded
        description
        listens
        podcastId
      }
    }
  }
`

export const CREATE_UPDATE_POST = gql`
  mutation CreateUpdatePost($title: String!, $abstract: String, $body: String!, $coverPhoto: Upload, $postId: ID) {
    post: createUpdatePost(title: $title, abstract: $abstract, body: $body, coverPhoto: $coverPhoto, postId: $postId) {
      errors {
        field
        messages
      }
      success
      post {
        abstract
        id
        body
        coverPhoto
        postId
      }
    }
  }
`
