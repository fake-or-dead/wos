import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <>
        POST
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        {post.content}
      </>
    )
  }
}
Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}
export default Post
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        id
        slug
        title
        content
        excerpt
        date
        modified
    }
  }
`