import config from '../config'
import React from 'react'
import withRoot from '../withRoot'

import './404.css'
import PageNotFoundLayout from '../components/PageNotFoundLayout'

class PageNotFound extends React.Component {
  render () {
    return (
      <PageNotFoundLayout>
        <div className='info'>
          <h1>404 - Page Not Found</h1>
          <a href={config.pathPrefix}>Take Me Back</a>
        </div>
      </PageNotFoundLayout>
    )
  }
}

export default withRoot(PageNotFound)
