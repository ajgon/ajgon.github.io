import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import config from '../config'

const styles = theme => ({
  hidden: {
    display: 'none'
  }
})

class HCard extends React.Component {

  render () {
		const { classes, avatar, post, social } = this.props

		if (post) {
      return(
				<section className={`${classes.hidden}`}>
          <a className='u-url p-name' href={`${config.siteUrl}${post.frontmatter.path}`}>{post.frontmatter.title}</a>
          <a className="p-author h-card" rel='author' href={config.siteUrl}>
            <img src={`${config.siteUrl}${avatar.fixed.src}`} className={`${classes.hidden} u-photo`} alt="Igor Rzegocki" />
            Igor Rzegocki
          </a>
					<time className="dt-published" itemProp='datepublished' dateTime={post.frontmatter.isoDate}>{post.frontmatter.isoDate}</time>
          {post.frontmatter.tags.map(tag => (
            <span className='p-category' key={tag}>{tag.replace(/^(.)(.*)/, (_, first, rest) => `${first.toUpperCase()}${rest}`)}</span>
					))}
				</section>
      )
    }

		return(
      <section className={`${classes.hidden} h-card`}>
        <span className="p-name">Igor Rzegocki</span>
				<span className="p-note">I'm a Ruby programmer, system administrator and privacy advocate from Kraków, Poland. My interest include traveling, gaming, machine learning &amp; open source software.</span>
				<img src={`${config.siteUrl}${avatar.fixed.src}`} className={`${classes.hidden} u-photo`} alt="Igor Rzegocki" />
        <span className="p-locality">Kraków, Poland</span>
        <a className="u-url u-uid" href={config.siteUrl}>Homepage</a>
        <a className="u-email" rel="me" href="mailto:igor@rzegocki.pl">E-mail</a>
        {social.map(socialItem => (
          <a className="u-url" rel="me" href={socialItem.node.url} key={socialItem.node.id}>{socialItem.node.name}</a>
        ))}
        <span className="p-category">Ruby</span>
        <span className="p-category">DevOps</span>
        <span className="p-category">Open Source</span>
        <span className="p-category">Docker</span>
        <span className="p-category">Self Hosting</span>
      </section>
    )
  }
}

export default withStyles(styles)(HCard)
