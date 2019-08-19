import React from 'react'
import withRoot from '../withRoot'

import PageNotFoundLayout from '../components/PageNotFoundLayout'

class PageNotFound extends React.Component {
  render () {
    return <PageNotFoundLayout />
  }
}

export default withRoot(PageNotFound)
