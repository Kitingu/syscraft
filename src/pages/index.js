import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/carousel"
import IconCards from "../components/about"
import Services from "../components/services"
import Product from "../components/product"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SEO description="This is the homepage for the main website" />

    <Slider />
    <IconCards />
    <Services />
    <Product title="SySCraft - Infinite Possibilities" image="/software.jpg" />
  </Layout>
)

export default IndexPage
