import React from "react";
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
    maxWidth: 500,
  },
  media: {
    height: 280,
  },
  title: {
    fontSize: "2.4rem",
  },
  body: {
    fontSize: "1.4rem",
    color: "black",
  },
  btn: {
    fontSize: "1.4rem",
    backgroundColor: "black",
    color: "white",
    margin: "0 2% 2%",
    "&:hover": {
      background: "#C70039",
    },
  }
});

const Project = props => {
  const classes = useStyles();
  const { projectName, imgURL, description, about, languages, websiteURL, repo} = props.project;

  return (
    <div key={projectName} className="project">
        <Card className={classes.root}>
            <CardActionArea href={websiteURL} target="_blank" rel="noopener">
                <CardMedia
                    component="img"
                    alt={projectName}
                    className={classes.media}
                    image={imgURL}
                    title={projectName}
                />
                <CardContent style={{minHeight: "180px"}}>
                    <Typography gutterBottom className={classes.title}>
                        {projectName}
                    </Typography>
                    <Typography className={classes.body}>
                        {languages}
                    </Typography>
                    <br />
                    <Typography className={classes.body}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button href={websiteURL} target="_blank" rel="noopener" size="large" color="secondary" underline="none" className={classes.btn}>
                Website
                </Button>
                <Button href={repo} target="_blank" rel="noopener" size="large" color="secondary" underline="none" className={classes.btn}>
                Repo
                </Button>
            </CardActions>
        </Card>
    </div>
  );
};

export default Project;