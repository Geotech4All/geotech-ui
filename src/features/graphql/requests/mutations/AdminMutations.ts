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

export const UPDATE_STAFF = gql`
  mutation StaffUpdate(
    $userEmail: String!,
    $canAlterPodcast: Boolean,
    $canAlterPost: Boolean,
    $canAlterUser: Boolean,
    $canCreatePodcast: Boolean,
    $canCreatePost: Boolean,
    $canCreateUser: Boolean,
    $canDeletePodcast: Boolean,
    $canDeletePost: Boolean,
    $canDeleteUser: Boolean) {
    staff: updateStaff(
      userEmail: $userEmail,
      canAlterPodcast: $canAlterPodcast, 
      canAlterPost: $canAlterPost, 
      canAlterUser: $canAlterUser, 
      canCreatePodcast: $canCreatePodcast, 
      canCreatePost: $canCreatePost, 
      canCreateUser: $canCreateUser, 
      canDeletePodcast: $canDeletePodcast, 
      canDeletePost: $canDeletePost, 
      canDeleteUser: $canDeleteUser) {
      errors {
        field
        messages
      }
      success
      staff {
        staffId
        id
      }
    }
  }
`

export const CREATE_STAFF = gql`
  mutation CreateStaff(
    $userEmail: String!,
    $canAlterPodcast: Boolean, 
    $canAlterPost: Boolean, 
    $canAlterUser: Boolean, 
    $canCreatePodcast: Boolean, 
    $canCreatePost: Boolean, 
    $canCreateUser: Boolean, 
    $canDeletePodcast: Boolean, 
    $canDeletePost: Boolean, 
    $canDeleteUser: Boolean) {
    createStaff(
      userEmail: $userEmail, 
      canAlterPodcast: $canAlterPodcast, 
      canAlterPost: $canAlterPost, 
      canAlterUser: $canAlterUser, 
      canCreatePodcast: $canCreatePodcast, 
      canCreatePost: $canCreatePost, 
      canCreateUser: $canCreateUser, 
      canDeletePodcast: $canDeletePodcast, 
      canDeletePost: $canDeletePost, 
      canDeleteUser: $canDeleteUser) {
      success
      errors {
        field
        messages
      }
      staff {
        staffId
        canAlterPodcast
        canAlterPost
        canAlterUser
        canCreatePodcast
        canCreatePost
        canCreateUser
        canDeletePodcast
        canDeletePost
        canDeleteUser
        user {
          email
          fullName
          profile {
            image
          }
        }
      }
    }
  }
`

export const CREATE_UPDATE_OPPORTUNITY = gql`
  mutation CreateUpdateOpportunity(
    $category: String, 
    $description: String, 
    $imageIds: [IdInput], 
    $opportunityId: ID, 
    $title: String) {
    opportunity: createUpdateOpportunity(
      category: $category, 
      description: $description, 
      imageIds: $imageIds, 
      opportunityId: $opportunityId, 
      title: $title) {
      errors {
        field
        messages
      }
      success
      opportunity {
        opportunityId
      }
    }
  }
`

export const CREATE_UPDATE_TAG = gql`
  mutation CreateUpdateTag($category: String, $description: String, $title: String, $tagId: ID) {
    tag: createUpdateTag(category: $category, description: $description, title: $title, tagId: $tagId) {
      errors {
        field
        messages
      }
      success
      tag {
        tagId
        title
      }
    }
  }
`
