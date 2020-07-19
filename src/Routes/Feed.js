import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { useQuery, useMutation, gql } from "@apollo/client";
import Loader from "../components/Loader";
import Post from "../components/Post";

const FEED_QUERY = gql`
  query SEE_FEED {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        name
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          name
        }
      }
      createdAt
    }
  }
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Prismagram</title>
      </Helmet>
      {loading && <Loader />}
      {!loading && console.log(data)}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            location={post.location}
            caption={post.caption}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            comments={post.comments}
            createdAt={post.createdAt}
          />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;
