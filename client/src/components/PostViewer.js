import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getPostsQuery } from '../queries/queries';


class PostViewer extends Component {
  displayPosts() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading Posts...</div>)
    } else {
      return data.posts.map(post => {
        return (
          <ul key={post.id}>

            <li >{post.title}</li>
            <li>{post.content}</li>
          </ul>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayPosts()}
        </ul>
      </div>


    );
  }
}

export default graphql(getPostsQuery)(PostViewer);
