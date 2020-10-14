import React from "react";
import projectData from "../data/projectData.json";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 240,
  },
  title: {
    fontSize: "2.4rem",
  },
  body: {
    fontSize: "1.4rem",
    color: "black",
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <div id="projects" className="tab">
      <div className="projectList">
        {
          projectData.map(project => (
            <div key={project.projectName} className="project">
              <Card className={classes.root}>
                <CardActionArea href={project.websiteURL} target="_blank" rel="noopener">
                  <CardMedia
                  component="img"
                  alt={project.projectName}
                  className={classes.media}
                  image={project.image}
                  title={project.projectName}
                  />
                  <CardContent>
                    <Typography gutterBottom className={classes.title}>
                      {project.projectName}
                    </Typography>
                    <Typography className={classes.body}>
                      {project.description}
                    </Typography>
                    <br />
                    <Typography className={classes.body}>
                      {project.languages}
                    </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button href={project.websiteURL} target="_blank" rel="noopener" size="large" color="secondary" underline="none" className={classes.body}>
                    Website
                  </Button>
                  <Button href={project.repo} target="_blank" rel="noopener" size="large" color="secondary" underline="none" className={classes.body}>
                    Repo
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;