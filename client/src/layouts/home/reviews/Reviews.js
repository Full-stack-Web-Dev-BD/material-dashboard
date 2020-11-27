import React from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3)
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin:'auto'
    },
    slider:{
      height:'200px !important',
      paddingTop:'0!important'
    }
}));
const Reviews=()=>{
    const classes=useStyles()

    const users= [
        {
          name: 'Ekaterina Tankova',
          avatarUrl: '/images/avatars/avatar_3.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        },
        {
          name: 'Cao Yu',
          avatarUrl: '/images/avatars/avatar_4.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        },
        {
          name: 'Alexa Richardson',
          avatarUrl: '/images/avatars/avatar_2.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        },
        {
          name: 'Anje Keizer',
          avatarUrl: '/images/avatars/avatar_5.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        },
        {
          name: 'Clarke Gillebert',
          avatarUrl: '/images/avatars/avatar_6.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        },
        {
          name: 'Adam Denisov',
          avatarUrl: '/images/avatars/avatar_1.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        },
        {
          name: 'Ava Gregoraci',
          avatarUrl: '/images/avatars/avatar_7.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        },
        {
          name: 'Emilee Simchenko',
          avatarUrl: '/images/avatars/avatar_8.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        },
        {
          name: 'Kwak Seong-Min',
          avatarUrl: '/images/avatars/avatar_9.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        },
        {
          name: 'Merrile Burgett',
          avatarUrl: '/images/avatars/avatar_10.png',
          description: 'Selim Reza is very proactive, responsive and great to deal with. He understands EDI, mapping, and has deep technology understanding. He knew where to take our project, and went beyond our expectations. I will be working with him on our next project!'
        }
      ];
      
    return(
      <div className={classes.root} style={{marginTop:30, height:300}}>
        <Grid container spacing={3} >
            <Grid item lg={12} md={12} xs={12} style={{textAlign:'center'}}>
              <Typography variant="h2">Our Clients Reviews</Typography>
            </Grid>
          <Grid item xl={12} md={12}>
            <section className="reviews">
                <Slider autoplay={3000}>
                    {users.map((user) => (
                        <div className={classes.slider}>
                            <div className={classes.clientReview}>
                                <Avatar alt="Remy Sharp" src={user.avatarUrl} className={classes.large} />
                                <Typography
                                  align="center"
                                  gutterBottom
                                  variant="h4"
                                >
                                  {user.name}
                                </Typography>
                                <Typography
                                  align="center"
                                  variant="body1"
                                >
                                  {user.description}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
          </Grid>
        </Grid>
      </div>
    )
}
export default Reviews;