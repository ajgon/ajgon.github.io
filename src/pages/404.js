import config from '../config'
import React from 'react'
import withRoot from '../withRoot'

import './404.module.css'

class PageNotFound extends React.Component {
  render () {
    return (
      <div className='info'>
        <h1>404 - Page Not Found</h1>
        <a href={config.pathPrefix}>Take Me Back</a>
      </div>
    )
  }
}

export default withRoot(PageNotFound)
