import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout>
    <h1>Naša piva</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/ticket2.jpg"
        loading="eager"
        width={800}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <StaticImage
        src="../images/ticket1.jpg"
        loading="eager"
        width={800}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
