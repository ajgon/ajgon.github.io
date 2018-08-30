import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import HeartSvg from './Heart.svg'

const styles = {
  heartWrap: {
    zIndex: -1,
    left: 0,
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',
    pointerEvents: 'none'
  },
  heart: {
    zIndex: 1,
    left: '50%',
    height: '3000px',
    minWidth: '1920px',
    backgroundColor: '#ffffff',
    willChange: 'transform',
    transform: 'translate3d(-50%,0,0)',
    position: 'absolute',
    top: 0,
    width: '100%',
    pointerEvents: 'none'
  }
}

class Heart extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.heartWrap}>
        <HeartSvg className={classes.heart} alt="" role="presentation" />
      </div>
    )
  }
}

Heart.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Heart)
