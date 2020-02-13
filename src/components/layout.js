import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import Address from "./address"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Address />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main">
        <main>{children}</main>
        <footer>
          ©<a href="https://syscraft.co.ke">Syscraft Limited</a>{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
