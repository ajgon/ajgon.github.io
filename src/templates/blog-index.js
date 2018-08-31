import config from '../config'
import urljoin from 'url-join'
import React from 'react'

import withRoot from '../withRoot'

import BlogExcerpt from '../components/BlogExcerpt'
import BlogPaginationLink from '../components/BlogPaginationLink'
import Section from '../components/Section'
import SEO from '../components/SEO.js'

class BlogIndex extends React.Component {
  render () {
    const { group, index, first, last, additionalContext } = this.props.pathContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    console.log(additionalContext)

    return (
      <Section headline='Blog'>
        <SEO />
        {group.map(post => {
          return (
            <BlogExcerpt post={post.node} siteUrl={urljoin(config.siteUrl, config.pathPrefix)} key={post.node.id} showShare showSummary shares={additionalContext.shares} />
          )
        })}

        <div style={{display: 'flex'}}>
          <BlogPaginationLink test={first} url={`/blog/${previousUrl}`} rel='prev' />
          <div style={{flexGrow: '1'}} />
          <BlogPaginationLink test={last} url={`/blog/${nextUrl}`} rel='next' />
        </div>
      </Section>
    )
  }
}

export default withRoot(BlogIndex)
