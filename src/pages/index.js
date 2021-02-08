import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="pb-12">Hi, I'm Andrew 👋</h1>
    <p>
      I'm a recent graduate from General Assembly, looking to make an impact in
      a fast-moving front-end team
    </p>
    <p className="border-b-2 border-indigo-600 pb-6">
      My specialities include React, Redux, Prisma, TypeORM, and others
    </p>
    {/*pass props here*/}
    <section className="pt-12">
      <Card className="max-w-screen-xl" />
    </section>
    <section className="py-12">
      <Card />
    </section>
    <section className="py-12">
      <Card />
    </section>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
