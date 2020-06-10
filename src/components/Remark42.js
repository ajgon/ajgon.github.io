import React from 'react'
import config from '../config'

class Remark42 extends React.Component {
  componentDidMount () {
    window.remark_config = { ...config.remark42, url: window.location.origin + window.location.pathname }
    ;(function (components) {
      for (let i = 0; i < components.length; i++) {
        const script = window.document.createElement('script')
        script.src = config.remark42.host + '/web/' + components[i] + '.js'
        script.defer = true
        script.id = 'remark-script'
        ;(window.document.head || window.document.body).appendChild(script)
      }
    })(config.remark42.components || ['embed'])
  }

  componentWillUnmount () {
    const script = window.document.getElementById('remark-script')
    if (script) {
      script.parentNode.removeChild(script)
    }
  }

  render () {
    return <div id='remark42' />
  }
}

export default Remark42
