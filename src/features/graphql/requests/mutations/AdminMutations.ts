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

export const DELETE_POST = gql`
  mutation DeletePost($postId: ID!) {
    post: deletePost(postId: $postId) {
      success
      errors {
        field
        messages
      }
    }
  }
`

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($profileId: ID!, $about: String, $firstName: String, $image: Upload, $lastName: String) {
    profile: updateProfile(profileId: $profileId, about: $about, firstName: $firstName, image: $image, lastName: $lastName) {
      errors {
        field
        messages
      }
      success
      profile {
        about
        image
        profileId
      }
    }
  }
`
