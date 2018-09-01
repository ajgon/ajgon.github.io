/* global graphql */
import 'typeface-roboto'
import 'prismjs/themes/prism-tomorrow.css'
import config from '../config'

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import CssBaseline from '@material-ui/core/CssBaseline'
import withRoot from '../withRoot'

import Container from '../components/Container'
import Heart from '../components/Heart'
import MenuAppBar from '../components/MenuAppBar'
import Footer from '../components/Footer'

import FavIcon from '../images/favicon.png'

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mainPage: props.location.pathname === '/'
    }
  }
  componentDidUpdate (prevProps) {
    if (prevProps.location.pathname === this.props.location.pathname) {
      return
    }

    const { location } = this.props
    const mainPage = location.pathname === '/'
    this.setState({ mainPage })
  }
  render () {
    const { children, data, location } = this.props
    const { mainPage } = this.state

    return (
      <React.Fragment>
        <Helmet
          title={config.siteTitle}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${FavIcon}` }
          ]}
        >
          <html lang='en' />
          <body id='about' />
          <style type='text/css'>{`body, #___gatsby { position: relative }`}</style>
        </Helmet>
        <CssBaseline />
        <MenuAppBar location={location} mainPage={mainPage} menuItems={data.allMenuJson.edges} />
        <Heart />
        <Container>
          {children()}
        </Container>
        <Footer />
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
        siteUrl
      }
    }
    allMenuJson {
      edges {
        node {
          id
          name
          to
        }
      }
    }
  }
`
