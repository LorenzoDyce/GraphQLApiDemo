import { gql } from 'apollo-boost';

const getPostsQuery = gql`
{
  posts {
    id
    title
    content


  }
}

`

const getAuthorsQuery = gql`
{
    authors {
      id
      firstName
      lastName
    
  }
}
`;


const addPostMutation = gql`

    mutation($title:String, $content:String!, $authorId:ID!) {
      createPost(title:$title, content:$content, authorId:$authorId) {
    author {
      posts {
        id
        title
        content
      }
    }
  }
}

`;

export {
  getAuthorsQuery,
  getPostsQuery,
  addPostMutation
}