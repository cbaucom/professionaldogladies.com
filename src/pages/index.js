import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Professional Dog Ladies" />
    <div style={{ maxWidth: `200px`, margin: `0 auto 10rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
