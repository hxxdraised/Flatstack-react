import {gql} from '@apollo/client'

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signin(input: {email: $email, password: $password}) {
      accessToken
      refreshToken
    }
  }
`
