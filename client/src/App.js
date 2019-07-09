import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

// Components
import PostViewer from './components/PostViewer';
import AddPost from './components/AddPost';


// Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  clientState: { defaults: {}, resolvers: {} }
});



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id='main'>
          <h1>Lorenzo's Reading List</h1>
          <PostViewer />
          <AddPost />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
