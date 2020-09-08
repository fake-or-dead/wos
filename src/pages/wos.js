import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wos = () => (
    <Layout>
      <SEO title="WOS" />
      <h1>Hi from the Wall of sharing</h1>
      <p>Welcome to Wall Of Sharing</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export default Wos