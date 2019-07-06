import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Home = ({ data: { loading, posts } }) =>
  loading
    ? null
    : posts.map(u => 
        <h1 key={u.id}>
          {u.author} {u.content}
        </h1>
      );

const allPostQuery = gql`
  {
    posts {
      id
      author
      content
    }
  }
`;

export default graphql(allPostQuery)(Home);
