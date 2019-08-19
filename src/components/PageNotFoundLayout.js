import config from '../config'

import React from 'react'
import Helmet from 'react-helmet'

import CssBaseline from '@material-ui/core/CssBaseline'
import withRoot from '../withRoot'

import FavIcon from '../images/favicon.png'

import styles from './PageNotFoundLayout.module.css'

class PageNotFoundLayout extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet
          title={`Page Not Found | ${config.siteTitle}`}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${FavIcon}` }
          ]}
        >
          <html lang='en' className={styles.page404html} />
          <body className={styles.page404} />
        </Helmet>
        <CssBaseline />
        <div className={styles.info}>
          <h1>404 - Page Not Found</h1>
          <a href={config.pathPrefix}>Take Me Back</a>
        </div>
      </React.Fragment>
    )
  }
}

export default withRoot(PageNotFoundLayout)
