import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  shareButton: {
    background: 'none',
    border: 'none'
  }
})

class WebShare extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: props.title,
      text: props.text,
      url: props.url,
      isSupported: (typeof window !== 'undefined' ? window.navigator || {} : {})
        .share
    }
  }

  share () {
    navigator.share(this.state)
  }

  render () {
    const { children, classes, fallbackComponent } = this.props

    return this.state.isSupported ? (
      <button onClick={() => this.share()} className={classes.shareButton}>
        {children}
      </button>
    ) : (
      fallbackComponent || <></>
    )
  }
}

export default withStyles(styles)(WebShare)
