import { gql } from "@apollo/client";

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      files {
        url
      }
      likeCount
      commentCount
    }
    searchUser(term: $term) {
      id
      avatar
      name
      isFollowing
      isSelf
    }
  }
`;