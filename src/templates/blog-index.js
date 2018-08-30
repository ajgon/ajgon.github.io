import React from 'react'

import withRoot from '../withRoot'

import BlogExcerpt from '../components/BlogExcerpt'
import BlogPaginationLink from '../components/BlogPaginationLink'
import Section from '../components/Section'

class BlogIndex extends React.Component {
  render () {
    const { group, index, first, last, additionalContext } = this.props.pathContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()
    const siteUrl = additionalContext.siteUrl

    return (
      <Section headline='Blog'>
        {group.map(post => {
          return (
            <BlogExcerpt post={post.node} siteUrl={siteUrl} key={post.node.id} showShare showSummary />
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
