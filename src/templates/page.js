import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Page extends Component {
  render() {
    const page = this.props.data.wordpressPage
    return (
      <Layout>
        <SEO title={page.title} />
        <h2>{page.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Layout>
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
    }
  }
`