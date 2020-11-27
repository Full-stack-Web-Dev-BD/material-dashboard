import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid, 
  TextField, 
  Button, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Aos from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  contact:{
    marginTop:30,
    marginLeft:50,
    marginRight:50
  },
  heading:{
    float:'left',
    marginLeft:50, 
    marginBottom:5,
  },
  inlineTextField:{
    width:'48%',
    paddingBottom:theme.spacing(1)
  },
  textField:{
    paddingBottom:theme.spacing(1),
  }
}));

const Contact=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contact" style={{marginTop:-50}}>
      <Grid container spacing={3}>
        <Grid item xl={12} xs={12} style={{textAlign:'center'}}>
          <Typography variant="h2">Contact Us</Typography>
          <hr style={{marginTop:10, marginBottom:40}} />
        </Grid>
        <Grid item xl={8} md={8} xs={12} data-aos='fade-right'>
          <Paper className={classes.paper} style={{height:340}}>
            <Typography variant="h4" className={classes.heading}>Contact Form</Typography>
            <form className={classes.contact}>
              <TextField id="inlineTextField" className={classes.inlineTextField} style={{float:'left'}} label="Name" />
              <TextField id="inlineTextField" className={classes.inlineTextField} style={{float:'right'}} label="Email" />
              <TextField id="standard-basic" className={classes.textField} fullWidth label="Subject" />
              <TextField id="standard-basic" multiline rows="4" className={classes.textField} fullWidth label="Message" />
              <Button variant="outlined" color="#E33B00" style={{marginTop:10, marginBottom:10}} fullWidth color="secondary" component="span">Send</Button>
            </form>  
          </Paper>
        </Grid>
        <Grid item xl={4} md={4} xs={12} data-aos='fade-left'>
          <Paper className={classes.paper} style={{height:340}}>
            <div className={classes.contact}>
              <Typography variant="h4" style={{float:'left', marginLeft:20}}>Contact Bellow Any Method</Typography>
              <List>
              <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary="House #146, Road #1, Mirpur DOSH, Dhaka – 1216, Bangladesh" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="selimcse12st@gmail.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CallIcon />
                  </ListItemIcon>
                  <ListItemText primary="+8801973415657, +8801714415657" />
                </ListItem>
              </List>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Contact;