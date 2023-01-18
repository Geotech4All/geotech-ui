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
