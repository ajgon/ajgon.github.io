import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import withRoot from '../withRoot';

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
  render() {
    const { classes, data } = this.props

    return (
      <React.Fragment>
        <Typography variant="display4" className={classes.strong}>Hello!</Typography>
        <Hidden smUp>
          <Typography variant="display1" gutterBottom>
            I handle impossible cases on the spot, miracles take me a few minutes.
          </Typography>
        </Hidden>
        <Hidden xsDown>
          <Typography variant="display3" gutterBottom>
            I handle impossible cases on the spot, miracles take me a few minutes.
          </Typography>
        </Hidden>
        <Typography variant="headline" gutterBottom>Summary</Typography>
        <Typography component="ul" gutterBottom>
          <li>More than 10 years of experience in Front-end development (HTML/CSS/JS)</li>
          <li>More than 8 years of experience in Ruby and RoR</li>
          <li>More than 8 years of experience in PHP software development</li>
          <li>3 years of experience as Linux admin (mostly AWS services)</li>
        </Typography>
        <Typography variant="headline" gutterBottom>Work Experience</Typography>
        <Typography component="ul" gutterBottom>
          {data.site.siteMetadata.jobs.map(job => {
            return(
              <li key={job.id}>
                <Link to={job.url} className={classes.secondaryColor}>{job.name}</Link> ({job.start} - {job.end || 'present day'})<br />
                {job.description}
              </li>
            )
          })}
        </Typography>
        <Typography variant="headline" gutterBottom>Notable projects</Typography>
        <Typography component="ul" gutterBottom>
          {data.site.siteMetadata.projects.map(project => {
            return(
              <li key={project.id}>
                <Link to={project.url} className={classes.secondaryColor}>{project.name}</Link> ({project.year})<br />
                {project.description}
              </li>
            )
          })}
        </Typography>
        <Typography variant="headline" gutterBottom>Academic Record</Typography>
        <Typography component="ul" gutterBottom>
          {data.site.siteMetadata.education.map(edu => {
            return(
              <li key={edu.id}>
                <Link to={edu.url} className={classes.secondaryColor}>{edu.name}</Link> ({edu.year})<br />
                <ul>
                {edu.titles.map((title, index) => {
                  return(<li key={index}>{title}</li>)
                })}
                  <li><Link to={edu.thesis.url} className={classes.secondaryColor}>{edu.thesis.name}</Link></li>
                </ul>
              </li>
            )
          })}
        </Typography>
        <Typography variant="headline" gutterBottom>Skills</Typography>
      {data.site.siteMetadata.skills.map(skill => {
        return (
          <div key={skill.id}>
            <Typography variant="subheading" gutterBottom>{skill.name}</Typography>
            <Typography component="ul" gutterBottom>
            {skill.list.map((title, index) => {
              return(<li key={index}>{title}</li>)
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
    site {
      siteMetadata {
        jobs {
          id
          name
          description
          url
          start(formatString: "DD.MM.YYYY")
          end(formatString: "DD.MM.YYYY")
        }
        projects {
          id
          name
          url
          year
          description
        }
        education {
          id
          name
          year
          titles
          thesis {
            name
            url
          }
        }
        skills {
          id
          name
          list
        }
      }
    }
  }
`
