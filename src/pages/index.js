import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="">Hi, I'm Andrew 👋</h1>
    <p>
      I'm a recent graduate from General Assembly, looking to make an impact in
      a fast-moving front-end team
    </p>
    <p>My specialities include React, Redux, Prisma, TypeORM, and others</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
