import { gql } from "@apollo/client";

export const TOKEN_AUTH = gql`
  mutation TokenAuth($password: String!, $email: String) {
    auth: tokenAuth(password: $password, email: $email) {
      token
      success
      errors
      user {
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
          image
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
