import { gql } from "@apollo/client";

export const TOKEN_AUTH = gql`
  mutation TokenAuth($password: String!, $email: String) {
    auth: tokenAuth(password: $password, email: $email) {
      token
      success
      errors
      user {
        isStaff
        email
        fullName
        staff {
          canAlterPodcast
          canAlterPost
          canAlterUser
          canCreatePodcast
          canCreatePost
          canCreateUser
          canDeletePodcast
          canDeletePost
          canDeleteUser
          staffId
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
      unarchiving
      refreshToken
    }
  }
`

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    token: refreshToken(refreshToken: $refreshToken) {
      token
      payload
      success
      errors
      refreshToken
    }
  }
`

export const REGISTER = gql`
    mutation Register($email: String!, $password1: String!, $password2: String!) {
      register(email: $email, password1: $password1, password2: $password2) {
        success
        errors
      }
    }
`
