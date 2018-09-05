import React, { Component } from 'react'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import config from '../config'

class SEO extends Component {
  render () {
    const { postNode, postPath, postSEO } = this.props
    let title
    let description
    let image
    let logo
    let postURL
    let postMeta
    if (postSEO) {
      postMeta = postNode.frontmatter
      ;({ title } = postMeta)
      description = postMeta.description
        ? postMeta.description
        : postNode.excerpt
      image = postMeta.cover.childImageSharp.sizes.src
      postURL = urljoin(config.siteUrl, config.pathPrefix, postPath)
    } else {
      title = config.siteTitle
      description = config.siteDescription
      image = urljoin(config.pathPrefix, '/icons/icon-512x512.png')
    }

    image = urljoin(config.siteUrl, image)
    logo = urljoin(config.siteUrl, config.pathPrefix, '/icons/icon-512x512.png')
    const blogURL = urljoin(config.siteUrl, config.pathPrefix)
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ''
      }
    ]
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image
              }
            }
          ]
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': blogURL
          },
          publisher: {
            '@type': 'Organization',
            name: postMeta.author,
            logo: {
              '@type': 'ImageObject',
              url: logo
            }
          },
          datePublished: postMeta.date,
          dateModified: postMeta.date,
          author: postMeta.author,
          description
        }
      )
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name='description' content={description} />
        <meta name='image' content={image} />

        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property='og:url' content={postSEO ? postURL : blogURL} />
        <meta property='og:type' content={postSEO ? 'article' : 'webpage'} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />

        {/* Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:creator'
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Helmet>
    )
  }
}

export default SEO
