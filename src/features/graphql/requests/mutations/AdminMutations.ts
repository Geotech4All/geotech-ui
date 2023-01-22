import { gql } from "@apollo/client";

export const CREATE_PODCAST = gql`
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

export const CREATE_POST = gql`
  mutation CreateUpdatePost($body: String!, $abstract: String, $title: String) {
    post: createUpdatePost(body: $body, abstract: $abstract, title: $title) {
      success
      errors {
        field
        messages
      }
      post {
        postId
        abstract
        author {
          fullName
          email
        }
        body
        dateAdded
        title
        readLength
      }
    }
  }
`
