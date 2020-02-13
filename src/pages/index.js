import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/carousel"
import IconCards from "../components/about"
import Services from "../components/services"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SEO description="This is the homepage for the main website" />

    <Slider />
    <IconCards />
    <Services/>
  </Layout>
)

export default IndexPage
