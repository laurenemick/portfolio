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
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={project.projectName}
                    className={classes.media}
                    image={project.image}
                    title={project.projectName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.projectName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {project.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {project.languages}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button size="small" color="primary" onClick={project.websiteURL}>
                    Website
                  </Button>
                  <Button size="small" color="primary" onClick={project.repo}>
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