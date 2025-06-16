import React from 'react'

import Layout from '../../components/Layout'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Publications
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              {/* <BlogRoll /> */}
              <h3>Blogs under construction.</h3>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
