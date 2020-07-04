import 'whatwg-fetch'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import config from '../config'

const styles = theme => ({
})

class Webmentions extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      count: null
    }
  }

  componentDidMount () {
		const { post } = this.props

    fetch(`https://webmention.io/api/count?target=${config.siteUrl}${post.frontmatter.path}`).then(
      data => data.json().then(
        json => this.setState({ count: json.count })
      )
    )
  }

  render () {
    const { count } = this.state

		return(
      count !== null && (<cite>{count === 0 ? 'No' : count} webmention{count === 1 ? '' : 's'}</cite>)
    )
  }
}

export default withStyles(styles)(Webmentions)

