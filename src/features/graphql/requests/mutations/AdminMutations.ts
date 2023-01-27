import { gql } from "@apollo/client";

export const CREATE_UPDATE_PODCAST = gql`
  mutation CreateUpdatePodcast($description: String!, $hostIds: [ID]!, $title: String!, $audio: Upload, $coverPhoto: Upload, $guestIds: [ID]) {
    createUpdatePodcast(description: $description, hostIds: $hostIds, title: $title, audio: $audio, coverPhoto: $coverPhoto, guestIds: $guestIds) {
      success
      errors {
        field
        messages
      }
      podcast {
        coverPhoto
        dateAdded
        description
        listens
        title
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
