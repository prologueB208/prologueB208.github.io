import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Logo from "../components/logo"
import Header from "../components/header"

const BlogPageTemplate = ({
  data: { site, markdownRemark: page },
  location,
}) => {
  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <div className="display-row">
        <Logo />
        <Header />
      </div>
      <article
        className="blog-page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">
            {page.fields.slug.substring(1, page.fields.slug.length - 1)}
          </h1>
        </header>
        <hr />
        <section
          dangerouslySetInnerHTML={{ __html: page.html }}
          itemProp="articleBody"
        />
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: page } }) => {
  return <Seo title={page.id} description={page.excerpt} />
}

export default BlogPageTemplate

export const pageQuery = graphql`
  query BlogPageBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
    }
  }
`
