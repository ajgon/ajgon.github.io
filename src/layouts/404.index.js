import config from '../config'

import React from 'react'
import Helmet from 'react-helmet'

import CssBaseline from '@material-ui/core/CssBaseline'
import withRoot from '../withRoot'

import FavIcon from '../images/favicon.png'

class PageNotFoundLayout extends React.Component {
  render () {
    const { children } = this.props

    return (
      <React.Fragment>
        <Helmet
          title={`Page Not Found | ${config.siteTitle}`}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${FavIcon}` }
          ]}
        >
          <html lang='en' />
          <body className='page404' />
        </Helmet>
        <CssBaseline />
        {children()}
      </React.Fragment>
    )
  }
}

export default withRoot(PageNotFoundLayout)
