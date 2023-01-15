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
