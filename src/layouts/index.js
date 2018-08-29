/* global graphql */
import 'typeface-roboto'
import 'prismjs/themes/prism-tomorrow.css'

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import CssBaseline from '@material-ui/core/CssBaseline'
import withRoot from '../withRoot'

import MenuAppBar from '../components/MenuAppBar'
import Heart from '../components/Heart'
import Container from '../components/Container'

import FavIcon from '../images/favicon.png'

class Layout extends React.Component {
  render () {
    const { children, data, location } = this.props

    return (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description }
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${FavIcon}` }
          ]}
        >
          <html lang='en' />
        </Helmet>
        <CssBaseline />
        <MenuAppBar location={location} />
        <Heart />
        <Container>
          {children()}
        </Container>
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default withRoot(Layout)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
