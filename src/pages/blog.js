import React from 'react'

import withRoot from '../withRoot';

class Blog extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Blog</div>
      </React.Fragment>
    )
  }
}

export default withRoot(Blog)

