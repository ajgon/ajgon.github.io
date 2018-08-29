/* global graphql */
import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import withRoot from '../withRoot'

const styles = (theme) => {
  return ({
    strong: {
      fontWeight: 'bold'
    },
    secondaryColor: {
      color: theme.palette.secondary.main
    }
  })
}

class Index extends React.Component {
  render () {
    const { classes, data } = this.props
    const files = data.allFile.edges

    return (
      <React.Fragment>
        <Typography variant='display4' className={classes.strong}>Hello!</Typography>
        <Hidden smUp>
          <Typography variant='display1' gutterBottom>
            I handle impossible cases on the spot, miracles take me a few minutes.
          </Typography>
        </Hidden>
        <Hidden xsDown>
          <Typography variant='display3' gutterBottom>
            I handle impossible cases on the spot, miracles take me a few minutes.
          </Typography>
        </Hidden>
        <Typography variant='headline' gutterBottom>Summary</Typography>
        <Typography component='ul' gutterBottom>
          <li>More than 10 years of experience in Front-end development (HTML/CSS/JS)</li>
          <li>More than 8 years of experience in Ruby and RoR</li>
          <li>More than 8 years of experience in PHP software development</li>
          <li>3 years of experience as Linux admin (mostly AWS services)</li>
        </Typography>
        <Typography variant='headline' gutterBottom>Work Experience</Typography>
        <Typography component='ul' gutterBottom>
          {data.allJobsJson.edges.map(job => {
            return (
              <li key={job.node.id}>
                <a href={job.node.url}>{job.node.name}</a> ({job.node.start} - {job.node.end || 'present day'})<br />
                {job.node.description}
              </li>
            )
          })}
        </Typography>
        <Typography variant='headline' gutterBottom>Notable projects</Typography>
        <Typography component='ul' gutterBottom>
          {data.allProjectsJson.edges.map(project => {
            return (
              <li key={project.node.id}>
                <a href={project.node.url}>{project.node.name}</a> ({project.node.year})<br />
                {project.node.description}
              </li>
            )
          })}
        </Typography>
        <Typography variant='headline' gutterBottom>Academic Record</Typography>
        <Typography component='ul' gutterBottom>
          {data.allEducationJson.edges.map(edu => {
            const file = files.find(item => item.node.id.match(RegExp(edu.node.thesis.url)))
            let thesisUrl = edu.node.thesis.url

            if (file) {
              thesisUrl = file.node.publicURL
            }

            return (
              <li key={edu.node.id}>
                <a href={edu.node.url}>{edu.node.name}</a> ({edu.node.year})<br />
                <ul>
                  {edu.node.titles.map((title, index) => {
                    return (<li key={index}>{title}</li>)
                  })}
                  <li><a href={thesisUrl}>{edu.node.thesis.name}</a></li>
                </ul>
              </li>
            )
          })}
        </Typography>
        <Typography variant='headline' gutterBottom>Skills</Typography>
        {data.allSkillsJson.edges.map(skill => {
          return (
            <div key={skill.node.id}>
              <Typography variant='subheading' gutterBottom>{skill.node.name}</Typography>
              <Typography component='ul' gutterBottom>
                {skill.node.list.map((title, index) => {
                  return (<li key={index}>{title}</li>)
                })}
              </Typography>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(Index))

export const query = graphql`
  query SiteJobsProjectsQuery {
    allFile(filter: {id: {regex: "/files/"}}) {
      edges {
        node {
          id
          publicURL
        }
      }
    }
    allJobsJson {
      edges {
        node {
          id
          name
          description
          url
          start(formatString: "DD.MM.YYYY")
          end(formatString: "DD.MM.YYYY")
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          id
          name
          url
          year
          description
        }
      }
    }
    allEducationJson {
      edges {
        node {
          id
          name
          year
          titles
          url
          thesis {
            name
            url
          }
        }
      }
    }
    allSkillsJson {
      edges {
        node {
          id
          name
          list
        }
      }
    }
  }
`
