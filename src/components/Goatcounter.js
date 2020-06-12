import React from 'react'

class Goatcounter extends React.Component {
  componentDidMount () {
    window.counter = 'https://rzegockipl-stats.ajgon.ovh/count';
    const script = window.document.createElement('script');
    script.async = 1;
    script.src = 'https://static-stats.ajgon.ovh/count.js';
    script.id = 'goatcounter';
    (window.document.head || window.document.body).appendChild(script);
  }

  componentWillUnmount () {
    const script = window.document.getElementById('goatcounter')
    if (script) {
      script.parentNode.removeChild(script)
    }
  }

  render () {
    return null
  }
}

export default Goatcounter
