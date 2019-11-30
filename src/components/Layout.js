import 'typeface-roboto'
import 'prismjs/themes/prism-tomorrow.css'
import config from '../config'

import React from 'react'
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
      mainPage:
        props.location.pathname === `${config.pathPrefix}/`.replace('//', '/')
    }
  }

  componentDidUpdate (prevProps) {
    if (
      prevProps.location.pathname ===
      this.props.location.pathname.replace('//', '/')
    ) {
      return
    }

    const { location } = this.props
    const mainPage =
      location.pathname === `${config.pathPrefix}/`.replace('//', '/')
    this.setState({ mainPage })
  }

  render () {
    const { children, data, location } = this.props
    const { mainPage } = this.state

    return (
      <>
        <Helmet
          title={config.siteTitle}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${FavIcon}` }
          ]}
        >
          <html lang='en' />
          <body id='about' />
          <style type='text/css'>
            {
              'body, #___gatsby { position: relative; font-family: Roboto, sans-serif } body { background: #fff }'
            }
          </style>
          <meta
            name='msapplication-config'
            content={data.allFile.edges[0].node.publicURL}
          />
        </Helmet>
        <CssBaseline />
        <MenuAppBar
          location={location}
          mainPage={mainPage}
          menuItems={data.allMenuJson.edges}
        />
        <Heart />
        <Container location={location}>{children}</Container>
        <Footer />
      </>
    )
  }
}

export default withRoot(Layout)
