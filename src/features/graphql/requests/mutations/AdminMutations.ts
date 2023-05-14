import { gql } from "@apollo/client";

export const CREATE_UPDATE_PODCAST = gql`
    mutation CreateUpdatePodcast($description: String!, $hostIds: [ID]!, $title: String!, $audioId: ID!, $coverPhotoId: ID, $podcastId: ID, $guestIds: [ID]) {
      podcast: createUpdatePodcast(description: $description, hostIds: $hostIds, title: $title, audioId: $audioId, coverPhotoId: $coverPhotoId, podcastId: $podcastId, guestIds: $guestIds) {
        errors {
          field
          messages
        }
        success
        podcast {
          coverPhoto {
            url
            description
            imageId
          }
          dateAdded
          description
          listens
          podcastId
        }
      }
    }
`

export const CREATE_UPDATE_POST = gql`
  mutation CreateUpdatePost($title: String!, $abstract: String, $body: String!, $coverPhotoId: ID, $postId: ID) {
    post: createUpdatePost(title: $title, abstract: $abstract, body: $body, coverPhotoId: $coverPhotoId, postId: $postId) {
      errors {
        field
        messages
      }
      success
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
    $canDeleteUser: Boolean
    $canCreateOpportunities: Boolean
    $canUpdateOpportunities: Boolean
    $canDeleteOpportunities: Boolean) {
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
      canDeleteUser: $canDeleteUser
      canCreateOpportunities: $canCreateOpportunities
      canUpdateOpportunities: $canUpdateOpportunities
      canDeleteOpportunities: $canDeleteOpportunities ) {
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
    $canDeleteUser: Boolean
    $canCreateOpportunities: Boolean
    $canUpdateOpportunities: Boolean
    $canDeleteOpportunities: Boolean) {
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
      canDeleteUser: $canDeleteUser
      canCreateOpportunities: $canCreateOpportunities
      canUpdateOpportunities: $canUpdateOpportunities
      canDeleteOpportunities: $canDeleteOpportunities ) {
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
        $abstract: String,
        $category: String,
        $content: String,
        $opportunityId: ID,
        $title: String!) {
      createUpdateOpportunity(
          title: $title,
          content: $content,
          abstract: $abstract,
          category: $category,
          opportunityId: $opportunityId) {
        success
        errors{
          field
          messages
        }
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

export const CREATE_UPDATE_IMAGE = gql`
    mutation CreateUpdateImage ($image: Upload!, $description: String, $folder: ImageFoldersEnum, $imageId: ID) {
      image: createUpdateImage (image: $image, description: $description, folder: $folder, imageId: $imageId) {
        image {
          publicId
          url
          description
          imageId
        },
        success,
        errors {
          field
          messages
        }
      }
    }
`

export const DELETE_IMAGE = gql`
    mutation DeleteImage ($imageId: ID!) {
      deleteImage(imageId: $imageId) {
        success
        errors {
          field
          messages
        }
      }
    }
`

export const CREATE_UPDATE_GUEST = gql`
    mutation CreateUpdateGuest($description: String, $guestId: ID, $name: String!) {
      guest: createUpdateGuest(description: $description, guestId: $guestId, name: $name) {
        success
        errors {
          field
          messages
        }
        guest {
          guestId
        }
      }
    }
`

export const CREATE_UPDATE_FILE = gql`
    mutation CreateUpdateFile($description: String, $file: Upload, $name: String, $fileId: ID, $folder: FileFoldersEnum) {
      file: createUpdateFile(description: $description, file: $file, name: $name, fileId: $fileId, folder: $folder) {
        success
        errors {
          field
          messages
        }
        file {
          url
          name
          description
          fileId
        }
      }
    }
`
