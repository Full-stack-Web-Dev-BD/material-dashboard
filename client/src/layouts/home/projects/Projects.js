import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import Aos from 'aos'
import 'aos/dist/aos.css'
import uuid from 'uuid/v1';

import ProjectCard from './ProjectCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const Projects = () => {
  const classes = useStyles();
  
  useEffect(()=>{
    Aos.init({duration:1000})
  }, [])

  const projects= [
    {
      id: uuid(),
      title: 'Desktop Application',
      description:
        'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
      imageUrl: '/images/products/product_1.png',
      totalDownloads: '594',
      updatedAt: '27/03/2019'
    },
    {
      id: uuid(),
      title: 'We',
      description:
        'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      imageUrl: '/images/products/product_2.png',
      totalDownloads: '625',
      createdAt: '31/03/2019'
    },
    {
      id: uuid(),
      title: 'Slack',
      description:
        'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
      imageUrl: '/images/products/product_3.png',
      totalDownloads: '857',
      createdAt: '03/04/2019'
    },
    {
      id: uuid(),
      title: 'Lyft',
      description:
        'Lyft is an on-demand transportation company based in San Francisco, California.',
      imageUrl: '/images/products/product_4.png',
      totalDownloads: '406',
      createdAt: '04/04/2019'
    },
    {
      id: uuid(),
      title: 'GitHub',
      description:
        'GitHub is a web-based hosting service for version control of code using Git.',
      imageUrl: '/images/products/product_5.png',
      totalDownloads: '835',
      createdAt: '04/04/2019'
    },
    {
      id: uuid(),
      title: 'Squarespace',
      description:
        'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
      imageUrl: '/images/products/product_6.png',
      totalDownloads: '835',
      createdAt: '04/04/2019'
    }
  ];
  return (
    <div className={classes.root} id="projects" style={{marginTop:30}}>
      <div className={classes.content}>
        <Grid container spacing={3} >
          <Grid item lg={12} md={12} xs={12} style={{textAlign:'center', marginBottom:40}}>
            <Typography variant="h2">Our Projects</Typography>
          </Grid>
          {projects.map(product => (
            <Grid
              item
              key={product.id}
              lg={3}
              md={3}
              xs={12}
              data-aos='fade-up'
            >
              <ProjectCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
