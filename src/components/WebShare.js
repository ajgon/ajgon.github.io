import React from 'react'

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
    const { children, fallbackComponent } = this.props

    return this.state.isSupported ? (
      <a onClick={() => this.share()}>{children}</a>
    ) : (
      fallbackComponent || <React.Fragment />
    )
  }
}

export default WebShare
