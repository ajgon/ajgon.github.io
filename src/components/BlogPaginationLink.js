import React from 'react'
import Link from 'gatsby-link'

import IconButton from '@material-ui/core/IconButton'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

class BlogPaginationLink extends React.Component {
  render () {
    const { rel, test, url } = this.props

    if (!test) {
      if (rel === 'prev') {
        return (
          <>
            <Link to={url} aria-label='Newer posts' id='blog-newer-posts'>
              <IconButton aria-labelledby='blog-newer-posts'>
                <ArrowBackIcon />
              </IconButton>
            </Link>
          </>
        )
      }

      if (rel === 'next') {
        return (
          <>
            <Link to={url} aria-label='Older posts' id='blog-older-posts'>
              <IconButton aria-labelledby='blog-older-posts'>
                <ArrowForwardIcon />
              </IconButton>
            </Link>
          </>
        )
      }
    }

    return <></>
  }
}

export default BlogPaginationLink
