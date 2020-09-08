import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

class Page extends Component {
  render() {
    const page = this.props.data.wordpressPage
    return (
      <>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
        {page.content}
      </>
    )
  }
}
Page.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}
export default Page
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
        id
        slug
        title
        content
        excerpt
        date
        modified
        slug
        status
    }
  }
`