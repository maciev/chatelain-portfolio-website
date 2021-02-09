import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Blog from "../pages"

const IndexPage = () => {
  return (
    <Layout>
      <div className="max-w-lg m-auto">
        <SEO title="Home" />
        <h1 className="pb-12">Hi, I'm Andrew 👋</h1>
        <p>
          I'm a recent graduate from General Assembly, looking to make an impact
          in a fast-moving front-end team
        </p>
        <p className="border-b-2 border-indigo-600 pb-6">
          My specialities include React, Redux, Prisma, TypeORM, and others
        </p>
      </div>
      <section className="pt-12">
        <Card
          className="max-w-screen-xl"
          video="https://cdn.dribbble.com/users/1788451/screenshots/15084070/media/300ec781fe9201aa3b553c4cc0e59a55.mp4"
          title="Personal Project 1"
          stack="React, Redux, Prisma"
          description="Personal project for fashion and design website"
          date="DEC 2020"
        />
      </section>
      <section className="py-12">
        <Card
          video="https://cdn.dribbble.com/users/239701/screenshots/15039932/media/04221dc1e1a638b133bbaa9fcad1b593.mp4"
          title="Personal Project 1"
          stack="React, Redux, Prisma"
          description="Personal project for fashion and design website"
          date="DEC 2020"
        />
      </section>
      <section className="py-12">
        <Card
          className="max-w-screen-xl"
          video="https://cdn.dribbble.com/users/2735998/screenshots/15074473/media/07ad26a697104126ae5c9f4d69383817.mp4"
          title="Personal Project 1"
          stack="React, Redux, Prisma"
          description="Personal project for fashion and design website"
          date="DEC 2020"
        />
      </section>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
